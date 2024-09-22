import { signinSchema, signupSchema } from "@/libs/zod";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
import { generateOTP } from "@/libs/RouteFunctions/OTP";
import jwt from "jsonwebtoken"
import { comparePassword } from "@/libs/hashing";
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const jwt_secret = process.env.NEXTAUTH_JWT_SECRET || ""
        const data = await req.json()
        const parsedData = signinSchema.safeParse(data)
        if (!parsedData.success)
            return NextResponse.json({ msg: "Input Validation Error", err: parsedData.error.errors }, { status: 401 })
        // we need to verify the hashed password
        const userExist = await prisma.user.findUnique({
            where: {
                email: parsedData.data.mail,
            }
        })
        console.log(userExist)
        if (!userExist)
            return NextResponse.json({ msg: "Enter Valid Email", err: "SignIn error" }, { status: 404 })
        let ispasswordValid = await comparePassword(parsedData.data.hashedPassword, userExist.hashedPassword);
        if (!ispasswordValid)
            return NextResponse.json({ msg: "Password Error", err: "SignIn error" }, { status: 404 })
        //todo  we need to add the check here that is user is valid or not if no send to verified false
        if(userExist.verified == false)
        {
            const token = jwt.sign({ id: userExist.id, mail: userExist.email, verified: false,  }, jwt_secret)
            return NextResponse.json({ msg: "Not Verified ", verified: userExist.verified,token }, { status: 201 })
        }
        // need to add the two facotr authentication check here
        const loginD = await prisma.loginDetatils.create({
            data:{
                browser:parsedData.data.clientDeatils.browser,
                os:parsedData.data.clientDeatils.OS,
                location:parsedData.data.locationDetails,
                userId:userExist.id,
                device:parsedData.data.clientDeatils.device,
            }
        })
        if(!loginD)
            return  NextResponse.json({ msg: "LoginDetails saving error", err: "Login details saving error" }, { status: 500 })
        const token = jwt.sign({ id: userExist.id, mail: userExist.email, verified: true }, jwt_secret)
        return NextResponse.json({ msg: "User Verified", token,verified:true }, { status: 201 })
    } catch (e: any) {
        return NextResponse.json({ msg: "Server Error", err: e.message }, { status: 500 })
    }
}