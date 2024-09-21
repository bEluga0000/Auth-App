import { signupSchema } from "@/libs/zod";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
import { generateOTP } from "@/libs/RouteFunctions/OTP";
import jwt from "jsonwebtoken"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const jwt_secret = process.env.NEXTAUTH_JWT_SECRET || ""
        const data = await req.json()
        const parsedData = signupSchema.safeParse(data)
        if (!parsedData.success)
            return NextResponse.json({ msg: "Input Validation Error", err: parsedData.error.errors }, { status: 401 })
        const userExist = await prisma.user.findUnique({
            where: {
                email: parsedData.data.mail,
            }
        })
        if (!userExist)
            return NextResponse.json({ msg: "Enter Valid Email", err: "SignIn error" }, { status: 404 })
        if (userExist && userExist.hashedPassword !== parsedData.data.hashedPassword)
            return NextResponse.json({ msg: "Password Error", err: "SignIn error" }, { status: 404 })
        const token = jwt.sign({ id: userExist.id }, jwt_secret)
        // if (!userExist.twoFactor && userExist.verified)
        //     return NextResponse.json({ msg: "SignIn succesfull", token, id: userExist.id, verified: userExist.verified }, { status: 201 })
        if(!userExist.verified)
        {
            const otp = generateOTP(userExist.id)
            if (!otp)
                return NextResponse.json({ msg: "Error while generating the OTP", err: "Generating OTP" }, { status: 401 })
            const token = jwt.sign({ id: userExist.id }, jwt_secret)
            // send mail from here
            return NextResponse.json({ msg: "SignIn succesfull", token, id: userExist.id, verified: userExist.verified,otp }, { status: 201 })
        }
        if(userExist.verified)
        {
            // we need to add the 2FA logic
            const token = jwt.sign({ id: userExist.id }, jwt_secret)
            return NextResponse.json({ msg: "User already exist", token, id: userExist.id, verified: userExist.verified }, { status: 201 })
        }
    } catch (e: any) {
        return NextResponse.json({ msg: "Server Error", err: e.message }, { status: 500 })
    }
}