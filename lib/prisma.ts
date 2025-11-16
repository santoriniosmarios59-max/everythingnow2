import { PrismaClient } from "@prisma/client";

declare global {
  // allow global `prisma` across hot-reloads in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : [],
  });

if (process.env.NODE_ENV === "development") global.prisma = prisma;
