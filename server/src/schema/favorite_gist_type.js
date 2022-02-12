const graphql = require('graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } =
  graphql;

const FavoriteGistType = new GraphQLObjectType({
  name: 'FavoriteGist',
  fields: () => ({
    description: { type: GraphQLString },
    id: { type: GraphQLID },
    dateCreated: { type: GraphQLString },
    files: { type: GraphQLJSONObject },
  }),
});

module.exports = FavoriteGistType;
