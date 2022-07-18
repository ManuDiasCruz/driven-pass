import { Credential} from "@prisma/client";

import { credentialData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/credentialRepository.js";

export async function create(credential: credentialData, userId: number) {
  const result = await repository.searchByTitleAndUserId(credential.title, userId);
  if (result)
    throw { type: "conflict", message: "There is already a credential registered with this title."};
  
  const hashedPassword = encripUtils.encryptSecurityPass(credential.password); 
  return repository.create({ ...credential, userId, password: hashedPassword });
}

export async function getcredentialUser(userId: number) {
  const result = await repository.getCredentialsUser(userId);
  return encripUtils.decryptObjectsPass(result);
}

export async function getCredential(credencialsId: number, userId: number) {
  const result = await returnCredential(credencialsId);
  checkUser(result.userId, userId);

  return encripUtils.decryptObjectsPass([result]);
}

export async function deleteCredential(credencialsId: number, userId: number) {
  const result = await returnCredential(credencialsId);
  checkUser(result.userId, userId);

  await repository.deleteCredential(credencialsId);
}

async function returnCredential(credencialsId: number) {
  const credential = await repository.getCredential(credencialsId);
  if (!credential) throw { type: "NotFound", message: "Credential not found." };

  return credential;
}