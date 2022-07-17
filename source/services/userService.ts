import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import * as encripUtils from "./../utils/encriptation.js";
import { userData } from "./../utils/types.js";
import * as userRepository from "./../repositories/userRepository.js";

export async function create(user: userData){
    const thereIsUser = await userRepository.search("email", user.email);
    
    if(thereIsUser) 
        throw { type: "conflict", message: "User already exists" };

    const hashedPass = encripUtils.encryptPassword(user.password);
    const newUser = await userRepository.create({ ...user, password: hashedPass });

    return newUser;
}

export async function signIn(user: userData){
    const thereIsUser = await userRepository.search("email", user.email);
    if (!thereIsUser)
        throw { type: "not_found", message: "Email not registered"}

    const isValid = encripUtils.decryptPassword(user.password, thereIsUser.password);
    if(!isValid) 
        throw { type: "unauthorized", message: "Invalid credentials. Try again." };
    
    const token = jwt.sign( 
        {id: thereIsUser.id, email: thereIsUser.email}, 
        process.env.JWT_SECRET+"", 
        { expiresIn: "12h" 
    });

    return { token };
}