import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllCredits() {
    return await prisma.credits.findMany()
}

export async function UpdateCredit(creditId, user, credit, boatPrice) {
    console.log('funcion Update:', creditId, user, credit, boatPrice);

    // restar el monto de la transaccion 
    const newCredit = credit - boatPrice;
    console.log('Saldo actual:', newCredit);
    const userCredit = await prisma.credits.update({
        where: {
            idCredit: creditId,
        },
        data: {
            Credit: newCredit
        }
        
    })
    console.log(newCredit, userCredit)


}




    
 

