import React from 'react';
import './Movie.css';

const Movie = ({movie}) => {
  return (
    <div>
      Title: {movie.Title}
      Year:
      Rating:
      Released:
      Runtime:
      Awards:
      Staring:
      
      <img className="poster" src={movie.Poster}/>
    </div>
  );
}

export default Movie;