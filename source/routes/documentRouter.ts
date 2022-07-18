import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { documentSchema } from "../schemas/documentSchema.js";

import * as documentController from "./../controllers/documentController.js";

const documentsRouter = Router();

documentsRouter.post("/documents", validateSchema(documentSchema), validateToken, documentController.create);
documentsRouter.get("/documents", validateToken, documentController.getDocumentsUser);
documentsRouter.get("/documents/:id", validateToken, documentController.getDocument);
documentsRouter.delete("/documents/:id", validateToken, documentController.deleteDocument);

export default documentsRouter;