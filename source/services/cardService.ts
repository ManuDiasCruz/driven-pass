import { Card} from "@prisma/client";

import { cardData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/cardRepository.js";

export async function create(card: cardData, userId: number) {
    const result = await repository.searchByTitleAndUserId(card.title, userId);
    if (result)
        throw { type: "conflict", message: "There is already a card registered with this title"};
    
    const hashedPassword = encripUtils.encryptSecurityPass(card.password); 
    return repository.create({ ...card, userId, password: hashedPassword });
}

export async function getCardUser(userId: number) {
    const result = await repository.getCardsUser(userId);
    return encripUtils.decryptObjectsPass(result);
}

export async function getCard(cardId: number, userId: number) {
    const result = await returnCard(cardId);
    checkUser(result.userId, userId);

    return encripUtils.decryptObjectsPass([result]);
}

export async function deleteCard(cardsId: number, userId: number) {
    const result = await returnCard(cardsId);
    checkUser(result.userId, userId);

    await repository.deleteCard(cardsId);
}

async function returnCard(cardsId: number) {
    const card = await repository.getCard(cardsId);
    if (!card) 
        throw { type: "NotFound", message: "Card not found" };

    return card;
}