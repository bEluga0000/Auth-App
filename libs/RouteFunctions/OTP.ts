import { authenticator } from 'otplib';
export const generateOTP =()=>{
    const scerete = authenticator.generateSecret()
    const otp = authenticator.generate(scerete)
    return {scerete,otp}
} 