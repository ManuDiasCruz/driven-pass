import { noteData } from "./../utils/types.js";
import { prisma } from "./../config/prisma_database.js";

export async function create(note: noteData) {
    return prisma.note.create({
        data: {
            ...note
        }
    });
}

export async function searchByTitleAndUserId(title: string, userId: number) {
    return prisma.note.findFirst({
        where: {
            title,
            userId
        }
    });
}

export async function getNotesUser(userId: number) {
    return prisma.note.findMany({
        where: {
            userId
        }
    });
}

export async function getNote(noteId: number) {
    return prisma.note.findFirst({
        where: {
            id: noteId
        }
    });
}

export async function deleteNote(noteId: number) {
    return prisma.note.delete({
        where: {
            id: noteId
        }
    });
}