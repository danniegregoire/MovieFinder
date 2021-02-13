import React from 'react';

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
      
      <img src={movie.Poster}/>
    </div>
  );
}

export default Movie;