import express from "express";
import {graphqlHTTP} from "express-graphql";
import schema from "./src/graphql/schema.js";
//import { PrismaClient } from "@prisma/client";
const app = express();

app.get('/', (req, res) => {
  res.json({
    //message: '******'
  })
})


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');