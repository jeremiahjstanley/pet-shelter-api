const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require('cors')

const app = express();

app.use(cors());

app.locals.title = "Pet Shelter API";

app.set("port", process.env.PORT || 4000);

app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}.`);
});
