import Cryptr from "cryptr";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export function encryptSecurityPass(password: string) {
  return cryptr.encrypt(password);
}

export function decryptSecurityPass(encryptedSecurityCode: string) {
  return cryptr.decrypt(encryptedSecurityCode);
}

export function encryptPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function decryptPassword(password: string, encryptedPassword: string) {
  return bcrypt.compareSync(password, encryptedPassword);
}

export function decryptObjectsPass(array: any[]) {
  return array.map(object => {
    const { password } = object;
    const decryptedPassword = decryptSecurityPass(password);
    return { ...object, password: decryptedPassword };
  });
}