import { Request, Response } from 'express';

import * as service from "./../services/documentService.js";

export async function create(req: Request, res: Response) {
    const userId = Number(res.locals.user.id);

    await service.create(req.body, userId);
    res.sendStatus(201);
}

export async function getDocumentsUser(req: Request, res: Response) {
    const userId = Number(req.params.userId);
    
    const documents = await service.getDocumentUser(userId);
    res.send(documents);
}

export async function getDocument(req: Request, res: Response) {
    const documentId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    const document = await service.getDocument(documentId, userId);
    res.send(document);
}

export async function deleteDocument(req: Request, res: Response) {
    const documentId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    await service.deleteDocument(documentId, userId);
    res.sendStatus(204);
}