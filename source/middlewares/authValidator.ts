import { validate as uuidValidate } from "uuid";
/* import SessionRepository from "./../repositories/sessionsRepository.js";
import UserRepository from "./../repositories/usersRepository.js"; */

export async function authValidator(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.split(" ")[1]?.trim();

  if (!token) {
    return res.status(401).send({
      message: "You must be logged in to do this.",
    });
  }

  if (!uuidValidate(token)) {
    return res.status(401).send({
      message: "Invalid token.",
    });
  }

  try {
    /* const session = await SessionRepository.getSessionByToken(token);

    if (session.rowCount === 0) {
      return res.status(404).json({
        message: "Session not found",
      });
    }

    const user = await UserRepository.getUserById(session.rows[0].userId);

    if (user.rowCount === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.locals.session = session.rows[0];
    res.locals.user = user.rows[0]; */

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
