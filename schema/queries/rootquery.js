const graphql = require("graphql");
const configuration = require("../../knexfile");
const knex = require("knex")(configuration);
const PetType = require('../types/pet')

const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    pet: {
      type: PetType,
      description: "Fetch a single Pet",
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) =>
        !!id &&
        knex("pets")
          .where("id", id)
          .first()
    },
    pets: {
      type: new GraphQLList(PetType),
      description: "Fetch all pets",
      resolve: () => knex("pets").select("*")
    },
    searchPets: {
      type: new GraphQLList(PetType),
      description: "Search for pets",
      args: {
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        breed: { type: GraphQLString }
      },
      resolve(_, { name, location, breed }) {
        if (name) {
          return knex("pets")
            .where("name", name)
            .select("*");
        } else if (location) {
          return knex("pets")
            .where("location", location)
            .select("*");
        } else if (breed) {
          return knex("pets")
            .where("breed", breed)
            .select("*");
        }
      }
    }
  }
});

module.exports = RootQuery
