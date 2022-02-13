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
        user_id: { type: new GraphQLNonNull(GraphQLID) },
        dateCreated: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(
        parentValue,
        { gist_id, user_id, dateCreated, description }
      ) {
        // add to fav list
        const favoriteRef = db.collection('favoritegists').doc(user_id);

        const res = await favoriteRef.set(
          {
            gist_id,
            user_id,
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
        user_id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parentValue, { gist_id, user_id }) {
        // Create a document reference
        const favoritesRef = db.collection('favoritegists').doc(user_id);

        // Remove the field from the document
        const res = await favoritesRef.update({
          gist_id: FieldValue.delete(),
        });

        return res;
      },
    },
  },
});

module.exports = mutation;
