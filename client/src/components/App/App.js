import './App.css';
import {useState} from 'react';
import MovieSearchBar from '../MovieSearchBar/MovieSearchBar';

function App() {
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  let props = {movieSearchResults, setMovieSearchResults};

  return (
    <div className="App">
      <header className="App-header">
        Welcome To Movie Finder
        <MovieSearchBar {...props} />
      </header>
    </div>
  );
}

export default App;
