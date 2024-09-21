import { signupSchema } from "@/libs/zod";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
import { generateOTP, verifyOTP } from "@/libs/RouteFunctions/OTP";
import jwt from "jsonwebtoken"
import { hashPassword } from "@/libs/hashing";
import { VERIFICATION_BASE_URL } from "@/libs/urls";
export async function POST(req:NextRequest,res:NextResponse){
    try{
        const jwt_secret = process.env.NEXTAUTH_JWT_SECRET || ""
        const data =await req.json()
        const parsedData = signupSchema.safeParse(data)
        if(!parsedData.success)
            return NextResponse.json({msg:"Input Validation Error",err:parsedData.error.errors},{status:201})
        const userExist = await prisma.user.findUnique({
            where:{
                email:parsedData.data.mail,
            }
        })
        if (userExist)
            return NextResponse.json({ msg: "email already exist",emailExist:true }, { status: 401 })
        const usernameExist = await prisma.user.findUnique({
            where:{
                username:parsedData.data.username
            }
        })
        if(usernameExist)
            return NextResponse.json({ msg: "Username already exist", err:"SignUp Error",usernameExist:true},{status:401})     
        const hashedPassword =await hashPassword(parsedData.data.hashedPassword)
        let user = await prisma.user.create({
            data:{
                email:parsedData.data.mail,
                firstname:parsedData.data.first,
                lastname:parsedData.data.last,
                username:parsedData.data.username,
                hashedPassword
            }
        })
        if(!user)
            return NextResponse.json({ msg: "Error While Creating User", err: "SignUp Error" }, { status: 401 })
        const token = jwt.sign({ id: user.id,mail:user.email}, jwt_secret)
        return NextResponse.json({ msg: "User Created", token, verified:user.verified,hashedPassword}, { status: 201 })
    }catch(e:any){
        return NextResponse.json({msg:"Server Error",err:e.message},{status:500})
    }
}