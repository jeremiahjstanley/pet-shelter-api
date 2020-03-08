const graphql = require("graphql");
const Pet = require("../models/pet.js");

const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} = graphql;

const PetType = new GraphQLObjectType({
  name: "Pet",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    breed: { type: GraphQLString },
    location: { type: GraphQLString },
    latitude: { type: GraphQLInt },
    longitude: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pet.findById(args.id); 
      }
    },
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find({})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
