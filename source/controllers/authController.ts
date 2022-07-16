import { Request, Response } from "express";

import * as userService from "./../services/userService.js";

export async function signUp(req: Request, res: Response) {
    await userService.create(req.body);
    res.sendStatus(201);

  /* try {
    const userExists = await UserRepository.getUserByEmail(email);

    if (userExists.rowCount > 0)
      return res.status(409).send({
        message: `There is already a user with this email: ${email}.`,
      });

    await UserRepository.createUser(username, email, password, image);

    res.status(201).send({ message: "SignUp successfully!" });
  } catch (error) {
    console.log("Error creating new user.", error.message);
    res.status(500).send(error.message);
  } */
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userService.signIn({ email, password });
    res.sendStatus(user);
    /* 
  try {
    const { email, password } = req.body;

    const user = await UserRepository.getUserByEmail(email);

    if (user.rowCount === 0)
      return res
        .status(404)
        .send({ message: `There isn't a user with this email: ${email}.` });

    const passwordHash = user.rows[0].password;

    if (!bcrypt.compareSync(password, passwordHash))
      return res.status(401).send({ message: `Wrong password!` });

    const openSession = await SessionRepository.getSessionByUserId(
      user.rows[0].id,
    );

    if (openSession.rowCount > 0)
      await SessionRepository.deleteSession(
        openSession.rows[0].id,
        openSession.rows[0].userId,
      );

    const token = uuid();
    const newSession = await SessionRepository.createSession(
      user.rows[0].id,
      token,
    );
    return res.status(201).send({
      sessionId: newSession.rows[0].id,
      userId: newSession.rows[0].userId,
      token,
      userImage: user.rows[0].image
    });
  } catch (error) {
    console.log("Error getting user data.", error.message);
    res.status(500).send(error.message);
  } */
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
