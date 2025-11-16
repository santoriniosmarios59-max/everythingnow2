import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export { prisma };  // Εξαγωγή του prisma ως named export
