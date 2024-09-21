import jwt from "jsonwebtoken";

export const authMiddleware = (token: string) => {
    const jwt_secret = process.env.NEXTAUTH_JWT_SECRET || "";
    try {
        const decoded = jwt.verify(token, jwt_secret) as jwt.JwtPayload;
        return { err: false, user_Id: decoded };
    } catch (e) {
        return { err: true, user_Id: null };
    }
};
export const verificationMiddleware = (token: string) => {
    const jwt_secret = process.env.NEXT_VERIFICATION_SECRET || "";
    try {
        const decoded = jwt.verify(token, jwt_secret) as jwt.JwtPayload;
        return { err: false, user_Id: decoded };
    } catch (e) {
        return { err: true, user_Id: null };
    }
};

