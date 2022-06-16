import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export async function getAllBoats() {
    console.log('Service Botes');
    return await prisma.boats.findMany()
}

export async function availableBoat(booking) {
   console.log(booking);
    console.log('service de Boat');
   const availBoat = await prisma.boats.findFirst({
        where:{
            idBoat: booking
        },
        select:{
            available: true
        }
    })
    console.log(availBoat);
    return availBoat
}
