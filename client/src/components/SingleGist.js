import React, { useEffect, useState } from 'react';
import ApiClient from '../gistLibrary/apiclient.mjs';

const SingleGist = ({ gist, favoriteList, setFavoriteList }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [showFiles, setShowFiles] = useState(false);
  console.log(gist);

  const checkFavoriteStatus = () => {
    // setFavorite(data_here);
  };

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const handleGistClick = async () => {
    setShowFiles(true);
  };

  // const showGistFiles = () => {
  //   console.log(gist.files);
  //   return 'my files';
  // };

  const changeFavoriteStatus = () => {
    // change DB also
    console.log('unmark this');
    if (isFavorite) {
      ApiClient.unmarkFavoriteGists(gist.id);
    } else {
      ApiClient.markFavoriteGists(
        gist.id,
        gist.desciption || '',
        gist.created_at || '',
        gist.files
      );
    }
    isFavorite ? setFavorite(false) : setFavorite(true);
  };

  return (
    <>
      <tr onClick={handleGistClick}>
        <td>{gist.description}</td>
        <td>{gist.created_at || gist.dateCreated}</td>
        <td onClick={changeFavoriteStatus}>{isFavorite ? 'YES' : 'NO'}</td>
      </tr>
      {/* {showFiles ? (
        <tr>
          <td>Gist Files:</td>
          <td>{showGistFiles}</td>
        </tr>
      ) : (
        ''
      )} */}
    </>
  );
};

export default SingleGist;
