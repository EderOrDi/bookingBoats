import { makeExecutableSchema} from "graphql-tools";
import { resolvers } from "./resolvers.js";
 
const typeDefs = `

    type User {
        idUser :Int
        name: String 
        email: String
    }
        input UserInput {
            idUser: Int
            name: String
            email: String
        }
    type Credits {
        idCredit: Int
        userId: Int
        Credit: Int
        }
        input CreditsInput{
            idCredit: Int
            userId: Int
            Credit: Int
        }
    type Schools {
        idSchool: Int
        nameSchool: String
        description: String
    }
        input SchoolsInput {
            idSchool: Int
            nameSchool: String
            description: String
        }

    type Boats {
        idBoat:Int
        name: String
        available: Boolean
        price: Int
        schoolId: Int
    }
        input BoatsInput {
            idBoat:Int
            name: String
            available: Boolean
            price: Int
            schoolId: Int
        }
scalar Date
    type Bookings{
        idBooking: Int
        from: Date
        to: Date 
        userId : Int
        boatId : Int
    }
        input BookingsInput{
            idBooking: Int
            from: Date
            to: Date
            userId : Int
            boatId : Int
        }
        

type Mutation {
    createUser(input: UserInput): User
    createCredit(input: CreditsInput): Credits
    createSchool(input: SchoolsInput): Schools
    createBoat(input: BoatsInput): Boats
    createBooking(input: BookingsInput): Bookings
}

type Query {
    user: [User]
    credit: [Credits]
    school: [Schools]
    boat: [Boats]
    booking: [Bookings]
}


    `;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
