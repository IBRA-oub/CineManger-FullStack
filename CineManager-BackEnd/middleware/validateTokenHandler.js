import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]; 

        // Vérifie le token
        jwt.verify(token, process.env.ACCESSS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401); 
                throw new Error("User is not authenticated");
            }
            req.user = decoded.user;
            console.log(req.user);
            
            next();
        });
    } else {
        res.status(401); 
        throw new Error("Authorization header missing");
    }
});

export default validateToken;
