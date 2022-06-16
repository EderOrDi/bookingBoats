import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function getAllSchools() {
    return await prisma.schools.findMany()
}