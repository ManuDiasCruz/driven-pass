import { Request, Response } from "express";

import * as userService from "./../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const newUser = await userService.create(req.body);
    res.status(201).send(newUser);
}

export async function signIn(req: Request, res: Response) {
    const token = await userService.signIn(req.body);
    res.status(200).send({ token });
}