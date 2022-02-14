import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ user, setCurrentUser }) => {
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleUpdateInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleSubmitUser = async () => {
    setCurrentUser(input);
    console.log(user);
    history.push('/gists');
  };

  return (
    <div>
      <label />
      <input type='text' value={input} onChange={handleUpdateInput} />
      <button type='button' onClick={handleSubmitUser}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
