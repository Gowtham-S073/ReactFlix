import './App.css';
import {useEffect, useState} from 'react';
import SearchIcon from '../src/search.svg';
import MovieCard from './MovieCard';



//http://www.omdbapi.com/?i=tt3896198&apikey=9a65d30f

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=9a65d30f";

const App = () => {

  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data);
  }

  useEffect(() => {
    searchMovies('Interstellar');
  }, []);


  return (

    <div className="App">
    <center><h1>📽<a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/240514/05441651b36d7a13824c1661302bb6af.png" alt="netflix-font" border="0"/></a></h1></center>
    
      
      <center>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      </center>

      {Movies?.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
