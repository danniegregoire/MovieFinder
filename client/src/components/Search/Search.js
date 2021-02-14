import React,{useState} from 'react';
import './Search.css';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';
import MovieSearchResults from '../MovieSearchResults/MovieSearchResults';

const Search = () => {
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  let props = {movieSearchResults, setMovieSearchResults};

  return (
    <div className="search">
      <MovieSearchBar {...props} />
      <MovieSearchResults {...props} />

    </div>
  )
}

  export default Search;
