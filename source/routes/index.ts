import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import documentsRouter from "./documentRouter.js";
import notesRouter from "./noteRouter.js";
import wifisRouter from "./wifiRouter.js";


const router = Router();
router.use(authRouter);
router.use(cardRouter);
router.use(credentialsRouter);
router.use(documentsRouter);
router.use(notesRouter);
router.use(wifisRouter);

export default router;