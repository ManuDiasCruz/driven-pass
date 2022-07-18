import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

import * as wifiController from "./../controllers/wifiController.js";

const wifisRouter = Router();

wifisRouter.post("/wifis", validateSchema(wifiSchema), validateToken, wifiController.create);
wifisRouter.get("/wifis/:userId", validateToken, wifiController.getWifisUser);
wifisRouter.get("/wifi/:id", validateToken, wifiController.getWifi);
wifisRouter.delete("/wifi/:id", validateToken, wifiController.deleteWifi);

export default wifisRouter;