const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.locals.title = "Pet Shelter API";

app.set("port", process.env.PORT || 4000);

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true
  })
);

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}.`);
});
