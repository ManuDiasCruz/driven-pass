import { cardData } from "./../utils/types.js";
import { prisma } from "./../config/prisma_database.js";

export async function create(card: cardData) {
    return prisma.card.create({
        data: {
            ...card
        }
    });
}

export async function searchByTitleAndUserId(title: string, userId: number) {
    return prisma.card.findFirst({
        where: {
            title,
            userId
        }
    });
}

export async function getCardsUser(userId: number) {
    return prisma.card.findMany({
        where: {
            userId
        }
    });
}

export async function getCard(credencialsId: number) {
    return prisma.card.findFirst({
        where: {
            id: credencialsId
        }
    });
}

export async function deleteCard(credencialsId: number) {
    return prisma.card.delete({
        where: {
            id: credencialsId
        }
    });
}