import { Request, Response } from 'express';
import { checkUser } from '../utils/userCheck.js';

import * as service from "./../services/noteService.js";

export async function create(req: Request, res: Response) {
    const userId = Number(res.locals.user.id);

    await service.create(req.body, userId);
    res.sendStatus(201);
}

export async function getNotesUser(req: Request, res: Response) {
    const userId = Number(req.params.userId);
    const userIdToken = Number(res.locals.user.id);

    checkUser(userId, userIdToken);
    
    const notes = await service.getNoteUser(userId);
    res.send(notes);
}

export async function getNote(req: Request, res: Response) {
    const noteId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    const note = await service.getNote(noteId, userId);
    res.send(note);
}

export async function deleteNote(req: Request, res: Response) {
    const noteId = Number(req.params.id);
    const userId = Number(res.locals.user.id);

    await service.deleteNote(noteId, userId);
    res.sendStatus(204);
}