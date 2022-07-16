import { User } from "@prisma/client";

export type userData = Omit<User, "id" | "createdAt">;