import { Router } from "express";

import { validateSchema } from "./../middlewares/schemaValidator.js";
import { validateToken } from "./../middlewares/tokenValidator";
import { wifiSchema } from "../schemas/wifiSchema.js";

import * as wifiController from "./../controllers/wifiController.js";

const wifisRouter = Router();

wifisRouter.post("/wifis", validateSchema(wifiSchema), validateToken, wifiController.create);
wifisRouter.get("/wifis", validateToken, wifiController.getWifisUser);
wifisRouter.get("/wifis/:id", validateToken, wifiController.getWifi);
wifisRouter.delete("/wifis/:id", validateToken, wifiController.deleteWifi);

export default wifisRouter;