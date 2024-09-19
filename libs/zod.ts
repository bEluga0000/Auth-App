import {z} from "zod"
export const signupSchema = z.object({
    mail: z.string().email({ message: "Invalid Email Address" }),
    username: z.string().min(3, { message: "Username Should be more than 3 characters" }),
    hashedPassword: z.string(),
    first:z.string(),
    last:z.string(),
})

// password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/,
//     {
//         message: "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
//     }),