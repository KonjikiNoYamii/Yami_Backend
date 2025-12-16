import jwt from 'jsonwebtoken';
import { errorResponse } from '../utils/response';
import config from '../utils/env';
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        errorResponse(res, "Token tidak ditemukan!", 401);
    }
    const token = authHeader?.split(" ")[1];
    if (!token) {
        throw new Error("Token tidak valid");
    }
    try {
        const payload = jwt.verify(token, config.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        errorResponse(res, "Token tidak valid!", 401);
    }
};
//# sourceMappingURL=auth.middleware.js.map