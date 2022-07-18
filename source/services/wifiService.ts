import { Wifi} from "@prisma/client";

import { wifiData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/wifiRepository.js";

export async function create(wifi: wifiData, userId: number) {
  const result = await repository.searchByTitleAndUserId(wifi.title, userId);
  if (result)
    throw { type: "conflict", message: "There is already a wifi registered with this title."};
  
  const hashedPassword = encripUtils.encryptSecurityPass(wifi.password); 
  return repository.create({ ...wifi, userId, password: hashedPassword });
}

export async function getwifiUser(userId: number) {
  const result = await repository.getWifisUser(userId);
  return encripUtils.decryptObjectsPass(result);
}

export async function getWifi(credencialsId: number, userId: number) {
  const result = await returnWifi(credencialsId);
  checkUser(result.userId, userId);

  return encripUtils.decryptObjectsPass([result]);
}

export async function deleteWifi(credencialsId: number, userId: number) {
  const result = await returnWifi(credencialsId);
  checkUser(result.userId, userId);

  await repository.deleteWifi(credencialsId);
}

async function returnWifi(credencialsId: number) {
  const wifi = await repository.getWifi(credencialsId);
  if (!wifi) throw { type: "NotFound", message: "Wifi not found." };

  return wifi;
}