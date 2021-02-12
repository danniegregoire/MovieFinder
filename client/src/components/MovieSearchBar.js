import React, {useState} from 'react';
import MovieSearchResults from './MovieSearchResults';

const MovieSearchBar = ({movieSearchResults, setMovieSearchResults}) => {
  const [searchTitle, setSearchTitle] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchTitle}`);
    setMovieSearchResults([
      {
        id: 123,
        title: 'Star Trek'
      },
      {
        id: 456,
        title: 'Star Wars'
      },
      {
        id:789,
        title: 'War Games'
      }
    ]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTitle} placeholder="Search for a movie title" required onChange={handleChange} />      
        <button onClick={handleSubmit}>SEARCH</button>
      </form>
      <MovieSearchResults movieSearchResults={movieSearchResults} />
    </div>
  )

}

export default MovieSearchBar;