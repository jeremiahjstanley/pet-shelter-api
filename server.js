const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const schema = require('./schema/schema');

const app = express();

app.use(cors());

app.locals.title = "Pet Shelter API";

app.set("port", process.env.PORT || 4000);

mongoose.connect('', {useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log(`${app.locals.title} is connected to the database`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}.`);
});
 