const graphql = require('graphql');
const axios = require('axios');
const db = require('../../db');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql;
const GistType = require('./gist_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    gists: {
      type: new GraphQLList(GistType),
      args: { username: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, args) {
        console.log('resolving');
        return axios
          .get(`https://api.github.com/users/${args.username}/gists`)
          .then((res) => {
            console.log(res.data);
            return res.data;
          })
          .catch((error) => console.log(error));
      },
    },
    gist: {
      type: GistType,
      args: { gist_id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { gist_id }) {
        return axios
          .get(`https://api.github.com/gists/${gist_id}`)
          .then((res) => {
            console.log(res.data.files);
            return res.data;
          });
      },
    },
    favoriteGists: {
      type: GraphQLJSON,
      async resolve() {
        const favRef = db.collection('favoritegists');
        const snapshot = await favRef.get();
        let favorites = {};
        snapshot.docs.forEach((doc) => {
          favorites[doc.id] = doc.data();
        });
        console.log(favorites);
        return favorites;
      },
    },
  }),
});

module.exports = RootQuery;
