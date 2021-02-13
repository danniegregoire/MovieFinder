import React, {useState} from 'react';
import MovieSearchResults from '../MovieSearchResults/MovieSearchResults';
import FontAwesome from 'react-fontawesome';
import './MovieSearchBar.css';

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

  const clearSearchResults = (e) => {
    e.preventDefault();
    setMovieSearchResults([]);
    return false;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='text-field-container'>
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input className="text-field" type="text" value={searchTitle} placeholder="Search for a movie title" required onChange={handleChange} />      
          <button className="text-field-button" onClick={handleSubmit}>Search &gt;</button>
        </div>
        <button onClick={clearSearchResults}>CLEAR RESULTS</button>
      </form>
      <MovieSearchResults movieSearchResults={movieSearchResults} />
    </div>
  );
}

export default MovieSearchBar;