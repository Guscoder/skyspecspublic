const graphql = require('graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = graphql;

const FavoriteGistType = new GraphQLObjectType({
  name: 'FavoriteGist',
  fields: () => ({
    description: { type: GraphQLString },
    gist_id: { type: new GraphQLNonNull(GraphQLID) },
    user_id: { type: new GraphQLNonNull(GraphQLID) },
    dateCreated: { type: GraphQLString },
  }),
});

module.exports = FavoriteGistType;
