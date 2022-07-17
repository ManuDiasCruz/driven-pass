import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { authSchema } from "./../schemas/authSchema.js";

import * as authController from "./../controllers/authController.js" q

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(authSchema), authController.signUp);
authRouter.post("/sign-in", validateSchema(authSchema), authController.signIn);

export default authRouter;