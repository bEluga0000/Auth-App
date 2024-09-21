import { verifySchema } from "@/libs/zod";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
import { generateOTP, verifyOTP } from "@/libs/RouteFunctions/OTP";
import { authMiddleware } from "@/libs/middlewares/auth";
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json()
        const token = req.headers.get("authorization")
        if(!token)
            return NextResponse.json({msg:"Authorization Header missing",err:"Verificatin Error"},{status:401})
        const parsedData = verifySchema.safeParse(data)
        if (!parsedData.success)
            return NextResponse.json({ msg: "Input Validation Error", err: parsedData.error.errors }, { status: 401 })
        const { err, user_Id } = authMiddleware(token)
        if(err || !user_Id)
            return NextResponse.json({ msg: "Enter Valid Authorization token", err: "JWT error" }, { status: 401 })
        const user = await prisma.user.findUnique({
            where:{
                id:user_Id.id
            }
        })
        if(!user)
            return NextResponse.json({ msg: "User not exist", err: "User Not found" }, { status: 404 })
        console.log(parsedData.data.otp)
        const verified = verifyOTP(parsedData.data.otp,user.id)
        if(!verified)
            return NextResponse.json({ msg: "Enter Correct OTP", err: "Verification Error"}, { status: 404 })
        await prisma.user.update({
            where:{
                id:user_Id.id
            },data:{
                verified:true
            }
        })
        return NextResponse.json({ msg: "User Verified succesfully" }, { status: 201 })
    } catch (e: any) {
        return NextResponse.json({ msg: "Server Error", err: e.message }, { status: 500 })
    }
}