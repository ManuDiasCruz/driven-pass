import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { authValidator } from "./../middlewares/authValidator.js";
import { logout, signIn, signUp } from "./../controllers/authController.js";

import authSchema from "./../schemas/authSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";
import signInSchema from "../schemas/signInSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(signInSchema), signIn);
//authRouter.post("/logout", validateSchema(authSchema), authValidator, logout);

export default authRouter;