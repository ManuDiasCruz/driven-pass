import { Request, Response } from 'express';

import { checkUser } from '../utils/userCheck.js';
import * as service from "./../services/cardService.js";

export async function create(req: Request, res: Response) {
    const userId = Number(res.locals.user.id);

    await service.create(req.body, userId);
    res.sendStatus(201);
}

export async function getCardsUser(req: Request, res: Response) {
    const userId = Number(req.params.userId);
    const userIdToken = Number(res.locals.user.id);

    checkUser(userId, userIdToken);
    const cards = await service.getCardUser(userId);
    res.send(cards);
}

export async function getCard(req: Request, res: Response) {
    const cardId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    const card = await service.getCard(cardId, userId);
    res.send(card);
}

export async function deleteCard(req: Request, res: Response) {
    const cardId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    await service.deleteCard(cardId, userId);
    res.sendStatus(204);
}