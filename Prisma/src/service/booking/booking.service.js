import { PrismaClient } from '@prisma/client'
import { availableBoat } from '../boat/boat.service.js';
import { UpdateCredit } from "../credit/credit.service.js";

// import { validateDate } from '../../validations/booking/booking.validation.js';
const prisma = new PrismaClient();



export async function allBookings() {
    return await prisma.bookings.findMany()
}


export async function createBooking(booking) {

    if (await validateDate(booking)) {
        return new Error("La fecha inicio debe ser mayor a la fecha fin")
    }

    // if (await boatAvailable(booking)) {
    //     return new Error("Bote fuera de servicio")
    // }

    if (await boatDisp(booking)) {
        return new Error("El bote no esta disponible")
    }

    if (await validateCredit(booking)) {
//        console.log('Validando If Credit');
        return new Error("Saldo insuficiente para reserva");
    }

    return await prisma.bookings.create({
        data: {
            userId: booking.userId,
            boatId: booking.boatId,
            from: new Date(booking.from),
            to: new Date(booking.to)
        }
    })
}

// async function boatAvailable(booking) {
    
//     availableBoat(booking)
//     console.log('Bote Funcionando', availableBoat);
//     return availableBoat 
    
// }

async function validateDate(booking) {
    console.log('Validando fecha');
    return booking.to <= booking.from
}




async function boatDisp(booking) {
    const to = booking.from;
    const from = booking.to;
    console.log('Validacion Fecha');
    const boatDisp = await prisma.bookings.findMany({
        where: {
            boatId: booking.boatId,
            AND: [{
                to: {
                    gt: new Date(to)
                },
                from: {
                    lt: new Date(from)
                },
            }]
        },
        select: {
            idBooking: true,
            from: true,
            to: true
        }
    })

    return boatDisp.length > 0
}



async function validateCredit(booking) {
    const userCredit = await prisma.credits.findFirst({
        where: {
            userId: booking.userId
        },
        select: {
            idCredit: true,
            Credit: true,
            userId: true
        }
    })

    const boatPrice = await prisma.boats.findFirst({
        where: {
            idBoat: booking.boatId
        },
        select: {
            idBoat: true,
            price: true,
            available: true
        }
    })
    
    
    if (userCredit.Credit >= boatPrice.price) {
        
        UpdateCredit(userCredit.idCredit, userCredit.userId, userCredit.Credit, boatPrice.price)
        
        return false
    } else {
        console.log('Saldo insuficiente para alquiler');
        return Error
    }
}


