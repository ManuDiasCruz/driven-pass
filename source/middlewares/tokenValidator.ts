import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    let token = req.headers["authorization"];
    if (!token) 
        throw { type: "unauthorized", message: "No token provided." };

    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET+"");

    res.locals.user = decoded;
    next();  
}