import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";


const checkRole = (requiredRole) => {
    return asyncHandler(async (req, res, next) => {
        const token = req.header('Authorization')?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Access denied, no token provided' });
        }

        try {
            const verified = jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET);
            req.user = verified;



            if (req.user.user.role !== requiredRole) {
                return res.status(403).json({ message: `Access denied, you need to be an ${requiredRole}` });
            }

            next();
        } catch (error) {
            res.status(400).json({ message: 'Invalid token' });
        }
    });
};

export default checkRole;
