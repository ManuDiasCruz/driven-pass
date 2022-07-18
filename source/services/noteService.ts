import { Note} from "@prisma/client";

import { noteData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/noteRepository.js";

export async function create(note: noteData, userId: number) {
    const result = await repository.searchByTitleAndUserId(note.title, userId);
    if (result)
        throw { type: "conflict", message: "There is already a note registered with this title"};
    
    return repository.create({ ...note, userId});
}

export async function getNoteUser(userId: number) {
    const result = await repository.getNotesUser(userId);
    return result;
}

export async function getNote(noteId: number, userId: number) {
    const result = await returnNote(noteId);
    checkUser(result.userId, userId);

    return result;
}

export async function deleteNote(documentId: number, userId: number) {
    const result = await returnNote(documentId);
    checkUser(result.userId, userId);

    await repository.deleteNote(documentId);
}

async function returnNote(documentId: number) {
    const note = await repository.getNote(documentId);
    if (!note) 
        throw { type: "NotFound", message: "Note not found" };

    return note;
}