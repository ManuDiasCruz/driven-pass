import { documentData } from "./../utils/types.js";
import { prisma } from "./../config/prisma_database.js";
import { DOC_TYPE } from "@prisma/client";

export async function create(document: documentData) {
    return prisma.document.create({
        data: {
            ...document
        }
    });
}

export async function searchByTitleAndUserId(type: DOC_TYPE, userId: number) {
    return prisma.document.findFirst({
        where: {
            type,
            userId
        }
    });
}

export async function getDocumentsUser(userId: number) {
    return prisma.document.findMany({
        where: {
            userId
        }
    });
}

export async function getDocument(documentId: number) {
    return prisma.document.findFirst({
        where: {
            id: documentId
        }
    });
}

export async function deleteDocument(documentId: number) {
    return prisma.document.delete({
        where: {
            id: documentId
        }
    });
}