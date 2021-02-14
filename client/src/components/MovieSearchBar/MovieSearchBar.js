import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
    if(searchResponse.data.imdbID){
      let fetchResponse = await axios.get(`http://localhost:3080/movie/${encodeURIComponent(searchResponse.data.imdbID)}`);
    
      if( fetchResponse.data.Title){
        setMovieSearchResults([fetchResponse.data, ...movieSearchResults]);
      }
    }
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
        <div className='searchbar-container'>
          <div className='text-field-container'>
            <FontAwesomeIcon icon={faSearch} className="fas fa-search fa-flip-horizontal" size="2x"/>
            <input className="text-field" type="text" value={searchTitle} placeholder="Search for a movie title" required onChange={handleChange} autoFocus/>      
          </div>
          <button className="search-button text-field-button" onClick={handleSubmit}>Search &gt;</button>
          <button className="clear-button text-field-button" onClick={clearSearchResults}>Clear</button>        
        </div>
      </form>
    </div>
  );
}

export default MovieSearchBar;