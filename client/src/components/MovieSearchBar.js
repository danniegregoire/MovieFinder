import React from 'react';
import MovieSearchResults from './MovieSearchResults';

const MovieSearchBar = ({movieSearchResults}) => {

  return (
    <div>
      Movie Search Bar
      <MovieSearchResults movieSearchResults={movieSearchResults} />
    </div>
  )

}

export default MovieSearchBar;