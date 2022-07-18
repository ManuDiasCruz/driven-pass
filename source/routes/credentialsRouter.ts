import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

import * as credentialController from "./../controllers/credentialController.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(credentialSchema), validateToken, credentialController.create);
credentialsRouter.get("/credentials/:userId", validateToken, credentialController.getCredentialsUser);
credentialsRouter.get("/credential/:id", validateToken, credentialController.getCredential);
credentialsRouter.delete("/credential/:id", validateToken, credentialController.deleteCredential);

export default credentialsRouter;