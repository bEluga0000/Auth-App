import { authMiddleware } from "@/libs/middlewares/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db"
export async function GET(req:NextRequest) {
    const token = req.headers.get("authorization")
    if(!token)
        return NextResponse.json({msg:"Enter the valid Header",err:"Header Error"},{status:400})
    const{err,user_Id} = authMiddleware(token)
    if(err || !user_Id)
        return NextResponse.json({msg:"Token Not valid",err:"JWT error"})
    const user = await prisma.user.findUnique({
        where:{
            id:user_Id.id
        },select:{
            id:true,
            email:true,
            firstname:true,
            lastname:true,
            loginDetails:true,
            twoFactor:true,
            username:true
        }
    })
    if(!user)
        return NextResponse.json({msg:"User Not found",err:"Me Error"},{status:404})
    return NextResponse.json({msg:"User found",user},{status:201})
}