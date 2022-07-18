import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { credentialSchema } from "../schemas/credentialSchema.js";

import * as credentialController from "./../controllers/credentialController.js";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchema(credentialSchema), validateToken, credentialController.create);
credentialsRouter.get("/credentials", validateToken, credentialController.getCredentialsUser);
credentialsRouter.get("/credentials/:id", validateToken, credentialController.getCredential);
credentialsRouter.delete("/credentials/:id", validateToken, credentialController.deleteCredential);

export default credentialsRouter;