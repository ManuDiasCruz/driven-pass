import * as prisma from "@prisma/client";

export type userData = Omit<prisma.User, "id" | "createdAt" | "updatedAt">;
export type credentialData = Omit<prisma.Credential, "id" | "createdAt" | "updatedAt">;
export type noteData = Omit<prisma.Note, "id" | "createdAt" | "updatedAt">;
export type cardData = Omit<prisma.Card, "id" | "createdAt" | "updatedAt">;
export type wifiData = Omit<prisma.Wifi, "id" | "createdAt" | "updatedAt">;
export type documentData = Omit<prisma.Document, "id" | "createdAt" | "updatedAt">;

