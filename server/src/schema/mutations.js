const db = require('../../db');
const graphql = require('graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql;
const FavoriteGistType = require('./favorite_gist_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    markFavorite: {
      type: FavoriteGistType,
      args: {
        gist_id: { type: new GraphQLNonNull(GraphQLID) },
        dateCreated: { type: GraphQLString },
        description: { type: GraphQLString },
        files: { type: GraphQLJSONObject },
      },
      async resolve(parentValue, { gist_id, dateCreated, files, description }) {
        // add to fav list
        const favoriteRef = db.collection('favoritegists').doc(gist_id);

        const res = await favoriteRef.set(
          {
            gist_id,
            files,
            dateCreated,
            description,
          },
          { merge: true }
        );

        return res;
      },
    },
    unmarkFavorite: {
      type: FavoriteGistType,
      args: {
        gist_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { gist_id }) {
        // Delete a document
        const res = await db.collection('favoritegists').doc(gist_id).delete();
        return res;
      },
    },
  },
});

module.exports = mutation;
