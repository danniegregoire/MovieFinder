import React,{useState} from 'react';
import './Search.css';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';

const Search = () => {
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  let props = {movieSearchResults, setMovieSearchResults};

  return (
    <div className="search">
      <MovieSearchBar {...props} />
    </div>
  )
}

  export default Search;
