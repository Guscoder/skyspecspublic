import { request, gql } from 'graphql-request';

const getGists = (username) => {
  const query = gql`
    query getUserGists($username: String!) {
      gists(username: $username) {
        id
        url
        created_at
        description
        files
      }
    }
  `;

  const variables = {
    username: username,
  };
  return request('http://localhost:3010/graphql', query, variables)
    .then((data) => data.gists)
    .catch((error) => console.log(error));
};

const getSingleGist = (gistId) => {
  //gist id '8696de510e0723bb953be577426d937a';
  const query = gql`
    query getSingleGist($gist_id: ID!) {
      gist(gist_id: $gist_id) {
        id
        url
        created_at
        description
        files
      }
    }
  `;

  const variables = {
    gist_id: gistId,
  };
  request('http://localhost:3010/graphql', query, variables)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const getFavoriteGists = () => {
  const query = gql`
    query getFavorites {
      favoriteGists
    }
  `;

  return request('http://localhost:3010/graphql', query)
    .then((data) => data.favoriteGists)
    .catch((error) => console.log(error));
};

const markFavoriteGists = (gist_id, description, dateCreated, files) => {
  const mutation = gql`
    mutation markFavorite(
      $gist_id: ID!
      $description: String!
      $dateCreated: String!
      $files: JSONObject
    ) {
      markFavorite(
        gist_id: $gist_id
        description: $description
        dateCreated: $dateCreated
        files: $files
      ) {
        gist_id
      }
    }
  `;

  const variables = {
    gist_id,
    description,
    dateCreated,
    files,
  };

  return request('http://localhost:3010/graphql', mutation, variables)
    .then((data) => data)
    .catch((error) => console.log(error));
};

const unmarkFavoriteGists = (gist_id) => {
  const mutation = gql`
    mutation unmarkFavorite($gist_id: ID!) {
      unmarkFavorite(gist_id: $gist_id) {
        gist_id
      }
    }
  `;
  const variables = {
    gist_id,
  };

  request('http://localhost:3010/graphql', mutation, variables)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const ApiClient = {
  getGists,
  getSingleGist,
  getFavoriteGists,
  markFavoriteGists,
  unmarkFavoriteGists,
};

export default ApiClient;
