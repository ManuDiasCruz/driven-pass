import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator.js";
import { cardSchema } from "../schemas/cardSchema.js";

import * as cardController from "./../controllers/cardController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", validateSchema(cardSchema), validateToken, cardController.create);
cardsRouter.get("/cards/:userId", validateToken, cardController.getCardsUser);
cardsRouter.get("/card/:id", validateToken, cardController.getCard);
cardsRouter.delete("/card/:id", validateToken, cardController.deleteCard);

export default cardsRouter;