import React from 'react';
import Movie from '../Movie/Movie';
import './MovieSearchResults.css';

const MovieSearchResults = ({movieSearchResults}) => {

  return (
    <div className="movie-search-results">
      {
        movieSearchResults.map((movie, index) => {
          console.log(`Movie Title: ${index} ${movie.Title}`);
          return (<Movie key={index} movie={movie} />);
        })
      }

    </div>
  );
}

export default MovieSearchResults;
