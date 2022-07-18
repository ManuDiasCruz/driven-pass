import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { credentialSchema } from "../schemas/credentialSchema.js";

import * as authController from "./../controllers/authController.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(credentialSchema), validateToken, authController.signUp);
credentialsRouter.get("/credentials", validateToken, authController.signIn);
credentialsRouter.get("/credentials/:id", validateToken, authController.signIn);
credentialsRouter.delete("/credentials/:id", validateToken, authController.signIn);

export default credentialsRouter;