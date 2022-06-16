import { PrismaClient } from '@prisma/client'
import { create } from 'domain'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
 const allUsers = await prisma.user.findMany()
 console.log('User create:', allUsers);

}

//   *********    update ********
//   const post = await prisma.credits.update({
//     where: { idCredit: 1 },
//     data: { Credit: 1555 },
        
// })
 
// console.log(post)
// }


// ******         create    ********
// await prisma.user.create({
//     data : {
//         name: 'Sindulfo',
//         lastName: 'Blanco',
//         email: 'blanco@sindulfo',
//         password: '1234',
//         credits: {
//             create: {Credit: 1000},
//         },
        

//     },
// })

// const allUsers = await prisma.user.findMany()
// console.log('User create:', allUsers);


// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })