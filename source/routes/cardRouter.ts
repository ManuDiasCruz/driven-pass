import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { cardSchema } from "../schemas/cardSchema.js";

import * as cardController from "./../controllers/cardController.js";

const cardsRouter = Router();

cardsRouter.post("/cards", validateSchema(cardSchema), validateToken, cardController.create);
cardsRouter.get("/cards", validateToken, cardController.getCardsUser);
cardsRouter.get("/cards/:id", validateToken, cardController.getCard);
cardsRouter.delete("/cards/:id", validateToken, cardController.deleteCard);

export default cardsRouter;