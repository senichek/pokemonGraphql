require("dotenv").config();
const { graphqlHTTP } = require('express-graphql');

const pokemonSchema = require("./pokemonSchema");

const express = require("express");

const app = express();

const port = process.env.PORT || 1234;

app.use('/graphql', graphqlHTTP({
    schema: pokemonSchema,
    graphiql: true,
    }),
);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
