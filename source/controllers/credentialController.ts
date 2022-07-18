import { Request, Response } from 'express';

import { checkUser } from "./../utils/userCheck.js";
import * as service from "./../services/credentialService.js";

export async function create(req: Request, res: Response) {
  const userId = Number(res.locals.user.id);

  await service.create(req.body, userId);
  res.sendStatus(201);
}

export async function getCredentialsUser(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const userIdToken = Number(res.locals.user.id);

  checkUser(userId, userIdToken);
  const credentials = await service.getCredentialUser(userId);
  res.send(credentials);
}

export async function getCredential(req: Request, res: Response) {
  const credentialId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  const credential = await service.getCredential(credentialId, userId);
  res.send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = Number(req.params.id);
  const userId = Number(res.locals.user.id);

  await service.deleteCredential(credentialId, userId);
  res.sendStatus(204);
}