import { Wifi} from "@prisma/client";

import { wifiData } from "./../utils/types.js";
import { checkUser } from "./../utils/userCheck.js";
import * as encripUtils from "./../utils/encriptation.js";
import * as repository from "./../repositories/wifiRepository.js";
import e from "express";

export async function create(wifi: wifiData) {
  const hashedPassword = encripUtils.encryptSecurityPass(wifi.password); 
  return repository.create({ ...wifi, password: hashedPassword });
}

export async function getWifiUser(userId: number) {
    const wifis =  await repository.getWifisUser(userId);
    return encripUtils.decryptObjectsPass(wifis);    
}

export async function getWifi(wifiId: number, userId: number) {
    const wifi = await returnWifi(wifiId);
    checkUser(wifi.userId, userId);
  
    return encripUtils.decryptObjectsPass([wifi]);
}

export async function deleteWifi(wifiId: number, userId: number) {
    const result = await returnWifi(wifiId);
    checkUser(result.userId, userId);

    await repository.deleteWifi(wifiId);
}

async function returnWifi(credencialsId: number) {
    const wifi = await repository.getWifi(credencialsId);
    if (!wifi) 
            throw { type: "NotFound", message: "Wifi not found" };

    return wifi;
}