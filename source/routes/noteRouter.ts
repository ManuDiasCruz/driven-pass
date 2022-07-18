import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { noteSchema } from "../schemas/noteSchema.js";

import * as noteController from "./../controllers/noteController.js";

const notesRouter = Router();

notesRouter.post("/notes", validateSchema(noteSchema), validateToken, noteController.create);
notesRouter.get("/notes", validateToken, noteController.getNotesUser);
notesRouter.get("/notes/:id", validateToken, noteController.getNote);
notesRouter.delete("/notes/:id", validateToken, noteController.deleteNote);

export default notesRouter;