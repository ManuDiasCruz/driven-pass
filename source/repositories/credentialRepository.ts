import { credentialData } from "./../utils/types.js";
import { prisma } from "./../config/prisma_database.js";

export async function create(credential: credentialData) {
    return prisma.credential.create({
        data: {
            ...credential
        }
    });
}

export async function searchByTitleAndUserId(title: string, userId: number) {
    return prisma.credential.findFirst({
        where: {
            title,
            userId
        }
    });
}

export async function getCredentialsUser(userId: number) {
    return prisma.credential.findMany({
        where: {
            userId
        }
    });
}

export async function getCredential(credencialsId: number) {
    return prisma.credential.findFirst({
        where: {
            id: credencialsId
        }
    });
}

export async function deleteCredential(credencialsId: number) {
    return prisma.credential.delete({
        where: {
            id: credencialsId
        }
    });
}