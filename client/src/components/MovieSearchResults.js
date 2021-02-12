import React from 'react';
import Movie from './Movie';

const MovieSearchResults = ({movieSearchResults}) => {

  return (
    <div>
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
