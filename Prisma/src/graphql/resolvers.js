import { PrismaClient } from "@prisma/client";
import { createBooking } from "../service/booking/booking.service.js";
import { createUser, getAllUser } from "../service/user/user.service.js";
import { getAllBoats } from "../service/boat/boat.service.js";
import { allBookings } from "../service/booking/booking.service.js";
import { getAllCredits } from "../service/credit/credit.service.js";
import { getAllSchools } from "../service/school/school.service.js";


const prisma = new PrismaClient();

export const resolvers = {

Query: {
    user(_,) {
        return getAllUser()
    },
    credit(_,) {
        return getAllCredits()
    },
    school(_,) {
        return getAllSchools()
    },
    boat(_,) {
        return getAllBoats()

    },
    booking(_,) {
        return allBookings()
    }

    },


    // Date: new GraphQLScalarType({
    //     name: 'Date',
    //     description: 'Date custom scalar type',
    //     parseValue(value) {
    //         return new Date(value); // value from the client
    //     },
    //     serialize(value) {
    //         return value.getTime(); // value sent to the client
    //     },
    //     parseLiteral(ast) {
    //         if (ast.kind === Kind.INT) {
    //             return parseInt(ast.value, 10); // ast value is always in string format
    //         }
    //         return null;
    //     },
    // }),


    Mutation: {
        async createUser(_, { input }) {
            return createUser(input);
        },
        async createCredit(_, { input }) {
            console.log(_);
            const credit = await prisma.credits.create({
                data: {
                    Credit: input.Credit,
                    userId: input.userId
                }
            })
            console.log(credit);
            return credit;
        },
        async createSchool(_, { input }) {
            console.log(_);
            const school = await prisma.schools.create({
                data: {
                    nameSchool: input.nameSchool,
                    description: input.description
                }
            })
            console.log(school);
            return school;
        },
        async createBoat(_, { input }) {
            const boat = await prisma.boats.create({
                data: {
                    name: input.name,
                    available: input.available,
                    price: input.price,
                    schoolId: input.schoolId
                }
            })
            console.log(boat);
            return boat;
        },
        async createBooking(_, { input }) {
            return createBooking(input)
        }

    }
}

