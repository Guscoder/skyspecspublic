const graphql = require('graphql');
const { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } =
  graphql;
// const Lyric = mongoose.model('lyric');

const FilesType = new GraphQLObjectType({
  name: 'FilesType',
  fields: () => ({
    filename: {
      type: FileType,
    },
  }),
});

const FileType = new GraphQLObjectType({
  name: 'FileType',
  fields: () => ({
    filename: { type: GraphQLString },
    type: { type: GraphQLString },
    language: { type: GraphQLString },
    raw_url: { type: GraphQLString },
    size: { type: GraphQLInt },
  }),
});

const GistType = new GraphQLObjectType({
  name: 'GistType',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    forks_url: { type: GraphQLString },
    commits_url: { type: GraphQLString },
    node_id: { type: GraphQLString },
    created_at: { type: GraphQLString },
    description: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    files: { type: GraphQLJSONObject },
    // owner: { type: GraphQLObjectType },
  }),
});

module.exports = GistType;
