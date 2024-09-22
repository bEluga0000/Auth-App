import {z} from "zod"
export const signupSchema = z.object({
    mail: z.string().email({ message: "Invalid Email Address" }),
    username: z.string().min(3, { message: "Username Should be more than 3 characters" }),
    hashedPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,{
            message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
    }),
    first:z.string(),
    last:z.string(),
})
export const signinSchema = z.object({
    mail: z.string().email({ message: "Invalid Email Address" }),
    hashedPassword: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,{
        message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
    }),
    clientDeatils:z.object({
        browser:z.string(),
        browserVersion:z.string(),
        OS:z.string(),
        device:z.string()
    }),
    locationDetails:z.string()
})
export type signupSchemaType = z.infer<typeof signupSchema>
export type signinSchemaType = z.infer<typeof signinSchema>
export const verifySchema = z.object({
    otp:z.string().length(6)
})
// password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,
//     {
//         message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
//     }),