import { NextRequest, NextResponse } from "next/server";
import { generateOTP, verifyOTP } from "@/libs/RouteFunctions/OTP";
import { authMiddleware, verificationMiddleware } from "@/libs/middlewares/auth";
import { VERIFICATION_BASE_URL } from "@/libs/urls";
import jwt from "jsonwebtoken"
import prisma from "@/libs/db"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const authorization = req.headers.get("authorization")
        if (!authorization)
            return NextResponse.json({ msg: "Enter the headers", err: "Axios Header Error" }, { status: 400 })
        const { err, user_Id } = authMiddleware(authorization)
        if (err || !user_Id)
            return NextResponse.json({ msg: "your jWT token is not valid", err: "JWT error" }, { status: 404 })
        // todo create the jwt token with only id
        const jwt_verifcation_secret = process.env.NEXT_VERIFICATION_SECRET || ""
        const verifictionToken = jwt.sign({ id: user_Id.id, email: user_Id.mail }, jwt_verifcation_secret, { expiresIn: "1h" })
        // todo generate the url to send the info
        const verificationMail = `${VERIFICATION_BASE_URL}?token=${verifictionToken}`
        // todo we going to do the send verificatin mail
        return NextResponse.json({ msg: "email sent", verificationMail, email: user_Id.mail, user_Id }, { status: 201 })
    } catch (e: any) {
        return NextResponse.json({ msg: "Server Error", err: e.message }, { status: 500 })
    }
}
export async function PATCH(req: NextRequest) {
    try {
        const jwt_verifcation_secret = process.env.NEXT_VERIFICATION_SECRET || ""
        const url = new URL(req.url)
        const token = url.searchParams.get('token')
        if (!token)
            return NextResponse.json({ msg: "Send The valid token", err: "Token Error" }, { status: 401 })
        const { err, user_Id } = verificationMiddleware(token)
        if (err || !user_Id)
            return NextResponse.json({ msg: "your jWT token is not valid", err: "JWT error" }, { status: 404 })

        await prisma.user.update({
            where: {
                id: user_Id.id
            }, data: {
                verified: true
            }
        })
        const jwt_secret = process.env.NEXTAUTH_JWT_SECRET || ""
        const verifiedtoken = jwt.sign({ id: user_Id.id, mail: user_Id.email, verified: true }, jwt_secret)
        return NextResponse.json({ msg: "User Verified", verifiedtoken }, { status: 201 })
    }
    catch (e: any) {
        return NextResponse.json({ msg: "Server Error", err: e.message }, { status: 500 })
    }


}