import { Document} from "@prisma/client";

import { documentData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/documentRepository.js";

export async function create(document: documentData, userId: number) {
    const result = await repository.searchByTitleAndUserId(document.type, userId);
    if (result)
        throw { type: "conflict", message: "There is already a document registered with this title"};
    
    return repository.create({ ...document, userId});
}

export async function getDocumentUser(userId: number) {
    const result = await repository.getDocumentsUser(userId);
    return result;
}

export async function getDocument(documentId: number, userId: number) {
    const result = await returnDocument(documentId);
    checkUser(result.userId, userId);

    return result;
}

export async function deleteDocument(documentId: number, userId: number) {
    const result = await returnDocument(documentId);
    checkUser(result.userId, userId);

    await repository.deleteDocument(documentId);
}

async function returnDocument(documentId: number) {
    const document = await repository.getDocument(documentId);
    if (!document) 
        throw { type: "NotFound", message: "Document not found" };

    return document;
}