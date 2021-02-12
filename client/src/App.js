import './App.css';
import {useState} from 'react';
import MovieSearchBar from './components/MovieSearchBar';

function App() {
  const [movieSearchResults, setMovieSearchResults] = useState([
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
