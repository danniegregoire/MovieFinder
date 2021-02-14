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
    let searchResponse = await axios.get(`http://localhost:3080/movies/search?title=${encodeURIComponent(searchTitle)}`);
    let fetchResponse = await axios.get(`http://localhost:3080/movie/${encodeURIComponent(searchResponse.data.imdbID)}`);

    setMovieSearchResults([fetchResponse.data, ...movieSearchResults]);
    setSearchTitle('');
  }

  const clearSearchResults = (e) => {
    e.preventDefault();
    setMovieSearchResults([]);
    return false;
  }

  return (
    <div className="movie-search-bar">
      <form onSubmit={handleSubmit}>
        <div className='text-field-container'>
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input className="text-field" type="text" value={searchTitle} placeholder="Search for a movie title" required onChange={handleChange} />      
          <button className="text-field-button" onClick={handleSubmit}>Search &gt;</button>
          <button onClick={clearSearchResults}>CLEAR RESULTS</button>
        </div>
      </form>
    </div>
  );
}

export default MovieSearchBar;