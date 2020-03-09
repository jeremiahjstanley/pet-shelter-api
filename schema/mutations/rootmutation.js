const graphql = require("graphql");
const knex = require("../../db/knex")
const PetType = require('../types/pet')

const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    addPet: {
      type: PetType,
      description: "Add new pet",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        breed: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLNonNull(GraphQLString) },
        latitude: { type: GraphQLNonNull(GraphQLString) },
        longitude: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve: async (
        _,
        { name, type, breed, location, latitude, longitude }
      ) => {
        const pet = await knex("pets")
          .insert({ name, type, breed, location, latitude, longitude })
          .returning("*");
        return pet[0];
      }
    },
    updatePet: {
      type: PetType,
      description: "Update existing pet",
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        breed: { type: GraphQLString },
        location: { type: GraphQLString },
        latitude: { type: GraphQLString },
        longitude: { type: GraphQLString }
      },
      resolve: async (_, args) => {
        const updatedProperties = Object.keys(args)
          .filter(key => !!args[key])
          .reduce((updatedProperties, key) => {
            updatedProperties[key] = args[key];
            return updatedProperties;
          }, {});
        const pet = await knex("pets")
          .where({ id: args.id })
          .update(updatedProperties)
          .returning("*");
        return pet[0];
      }
    }
  })
});

module.exports = RootMutation
