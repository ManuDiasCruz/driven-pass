import { Request, Response } from 'express';

import { checkUser } from '../utils/userCheck.js';
import * as service from "./../services/wifiService.js";

export async function create(req: Request, res: Response) {
    await service.create(req.body);
    res.sendStatus(201);
}

export async function getWifisUser(req: Request, res: Response) {
    const userId = Number(req.params.userId);
    const userIdToken = Number(res.locals.user.id);

    checkUser(userId, userIdToken);
    const wifis = await service.getWifiUser(userId);
    res.send(wifis);
}

export async function getWifi(req: Request, res: Response) {
    const wifiId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    const wifi = await service.getWifi(wifiId, userId);
    res.send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
    const wifiId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    await service.deleteWifi(wifiId, userId);
    res.sendStatus(204);
}