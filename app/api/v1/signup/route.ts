import { signupSchema } from "@/libs/zod";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
import { authenticator } from 'otplib';
import { generateOTP } from "@/libs/RouteFunctions/OTP";
export async function POST(req:NextRequest,res:NextResponse){
    try{
        const data = req.json()
        const parsedData = signupSchema.safeParse(data)
        if(!parsedData.success)
            return NextResponse.json({msg:"Input Validation Error",err:parsedData.error.errors},{status:401})
        const userExist = await prisma.user.findUnique({
            where:{
                email:parsedData.data.mail,
                hashedPassword:parsedData.data.hashedPassword
            }
        })
        if(userExist)
          // Need to generate the otp here and let the user to enter the details
        {
            const { scerete, otp } = generateOTP()
            if (!otp || !scerete)
                return NextResponse.json({ msg: "Error while generating the OTP", err: "Generating OTP" }, { status: 401 })
            const userExistOTP = await prisma.user.update({
                where: {
                    id: userExist.id
                }, data: {
                    otp,
                    otpString: scerete
                }
            })
            if(!userExistOTP)
                return NextResponse.json({ msg: "Error while storing the OTP", err: "SignUp Error" }, { status: 401 })
            return NextResponse.json({ msg: "User already exist", userId: userExist.id, verified: userExist.verified ,otp:userExistOTP.otp,scerete:userExistOTP.otpString}, { status: 201 })
        }
        const usernameExist = await prisma.user.findUnique({
            where:{
                username:parsedData.data.username
            }
        })
        if(usernameExist)
            return NextResponse.json({ msg: "Username already exist", err:"SignUp Error"},{status:401})

        const mailExist = await prisma.user.findUnique({
            where:{
                email:parsedData.data.mail
            }
        })
        if (mailExist)
            return NextResponse.json({ msg: "email already exist", err: "SignUp Error" },{status:401})

        let user = await prisma.user.create({
            data:{
                email:parsedData.data.mail,
                firstname:parsedData.data.first,
                lastname:parsedData.data.last,
                username:parsedData.data.username,
                hashedPassword:parsedData.data.hashedPassword,
            }
        })
        if(!user)
            return NextResponse.json({ msg: "Error While Creating User", err: "SignUp Error" }, { status: 401 })

        // here i need to add the mail that i will send to the user with verification code 
        const { scerete, otp } = generateOTP()
        if (!otp || !scerete)
            return NextResponse.json({ msg: "Error while generating the OTP", err: "Generating OTP" }, { status: 401 })
        user = await prisma.user.update({
            where:{
                id:user.id
            },data:{
                otp,
                otpString:scerete
            }
        })
        if(!user)
            return NextResponse.json({ msg: "Error while storing the OTP", err:"SignUp Error" }, { status: 401 })
        return NextResponse.json({ msg: "User already exist", userId: user.id, verified: user.verified,user:user.otp}, { status: 201 })
    }catch(e:any){
        return NextResponse.json({msg:"Server Error",err:e.message},{status:500})
    }
}