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
  request('http://localhost:3010/graphql', query, variables)
    .then((data) => console.log(data.gists))
    .catch((error) => console.log(error));
};

// getGists('GrahamcOfBorg');

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

// getSingleGist('8696de510e0723bb953be577426d937a');

const getFavoriteGists = () => {
  const query = gql`
    query getFavorites {
      favoriteGists
    }
  `;

  request('http://localhost:3010/graphql', query)
    .then((data) => console.log(data.favoriteGists))
    .catch((error) => console.log(error));
};

// getFavoriteGists();

const markFavoriteGists = (gist_id, user_id, dateCreated, description) => {
  const mutation = gql`
    mutation markFavorite(
      $gist_id: ID!
      $user_id: ID!
      $dateCreated: String!
      $description: String!
    ) {
      markFavorite(
        gist_id: $gist_id
        user_id: $user_id
        dateCreated: $dateCreated
        description: $description
      ) {
        gist_id
      }
    }
  `;

  const variables = {
    gist_id,
    user_id,
    dateCreated,
    description,
  };

  request('http://localhost:3010/graphql', mutation, variables)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const unmarkFavoriteGists = (gist_id, user_id) => {
  const mutation = gql`
    mutation unmarkFavorite($gist_id: ID!, $user_id: ID!) {
      unmarkFavorite(gist_id: $gist_id, user_id: $user_id) {
        gist_id
      }
    }
  `;
  // gist_id, user_id, dateCreated, description
  const variables = {
    gist_id,
    user_id,
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
