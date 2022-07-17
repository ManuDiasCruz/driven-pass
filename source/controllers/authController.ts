import { Request, Response } from "express";

import * as userService from "./../services/userService.js";

export async function signUp(req: Request, res: Response) {
    await userService.create(req.body);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const user = await userService.signIn(req.body);
    res.sendStatus(user);
}

/* export async function logout(req, res) {
  try {
    const { session } = res.locals;
    await SessionRepository.deleteSession(session.id, session.userId);

    res.status(200).send({ message: "Logout successfully!" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
} */
