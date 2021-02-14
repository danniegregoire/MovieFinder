import React from 'react';
import './Movie.css';
import Tomato from './tomato.svg';

const Movie = ({movie}) => {
  let ratings = {};

  if(movie.Ratings){
    movie.Ratings.map(rating => ratings[rating.Source]= rating.Value);
  }

  return (
    <div className='movie-result'>
      <img className='movie-poster' src={movie.Poster} alt='{movie.Title} movie poster'/>
      <h1>{movie.Title}</h1>
      <span className='movie-year'>{movie.Year}</span>&bull;<span className='movie-rating'>{movie.Rated}</span>&bull;<span className='movie-runtime'>{movie.Runtime}</span>&bull;
        {ratings['Rotten Tomatoes'] !== undefined ? (
            <span className='movie-review'><img src={Tomato} alt="Rotten Tomatoes"/> {ratings['Rotten Tomatoes']}</span>
          ) : (
            <span style={{fontSize: '.8em'}}>(no reviews)</span>
        )}
      <p>{movie.Plot}</p>
    </div>
  );
}

export default Movie;