const graphql = require("graphql");
const RootQuery = require("./queries/rootquery");
const RootMutation = require("./mutations/rootmutation");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});
