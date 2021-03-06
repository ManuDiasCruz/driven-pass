import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator.js";
import { noteSchema } from "../schemas/noteSchema.js";

import * as noteController from "./../controllers/noteController.js";

const notesRouter = Router();

notesRouter.post("/notes", validateSchema(noteSchema), validateToken, noteController.create);
notesRouter.get("/notes/:userId", validateToken, noteController.getNotesUser);
notesRouter.get("/note/:id", validateToken, noteController.getNote);
notesRouter.delete("/note/:id", validateToken, noteController.deleteNote);

export default notesRouter;