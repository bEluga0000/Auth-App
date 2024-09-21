import { authenticator } from 'otplib';
authenticator.options = {
    step: 60, // Set OTP validity period to 60 seconds
    window: 1 // Allow for 1 time step tolerance before and after
};
export const generateOTP =(scerete:string)=>{
    const otp = authenticator.generate(scerete)
    return otp
} 
export const verifyOTP = (otp: string, secret: string): boolean => {
    console.log(otp,secret)
    const isVerified = authenticator.verify({
        token: otp,
        secret,
});
    console.log("OTP verification result:", isVerified);
    return isVerified;
};