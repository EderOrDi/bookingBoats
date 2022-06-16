import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export async function createUser(user) {
    return await prisma.user.create({     
        data: {
            name: user.name,
            lastName: user.lastName,
            email: user.email
        }
    })
}

export async function getAllUser() {
    return await prisma.user.findMany()
}

