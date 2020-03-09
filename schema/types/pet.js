const graphql = require("graphql");

const { GraphQLID, GraphQLObjectType, GraphQLString } = graphql;

const PetType = new GraphQLObjectType({
  name: "Pet",
  fields: () => ({
    id: { type: GraphQLID, resolve: ({ id }) => id },
    name: { type: GraphQLString, resolve: ({ name }) => name },
    type: { type: GraphQLString },
    breed: { type: GraphQLString, resolve: ({ breed }) => breed },
    location: { type: GraphQLString, resolve: ({ location }) => location },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString }
  })
});

module.exports = PetType;
