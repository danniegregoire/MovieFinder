import React, {useState} from 'react';
import MovieSearchResults from './MovieSearchResults';
const axios = require('axios');

const MovieSearchBar = ({movieSearchResults, setMovieSearchResults}) => {
  const [searchTitle, setSearchTitle] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchTitle}`);
    let response = await axios.get(`http://localhost:3080/search?title=${searchTitle}`);
    setMovieSearchResults([...movieSearchResults, response.data]);
    setSearchTitle('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTitle} placeholder="Search for a movie title" required onChange={handleChange} />      
        <button onClick={handleSubmit}>SEARCH</button>
      </form>
      <MovieSearchResults movieSearchResults={movieSearchResults} />
    </div>
  );
}

export default MovieSearchBar;