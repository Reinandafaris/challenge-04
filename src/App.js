import React, { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';
import { Link } from 'react-router-dom';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <Link to={`/Detail/${movie.id}`}>
            <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MovieList</h1>
        <div>
          <input className="Movie-search" placeholder="What do you want to watch?" onChange={({ target }) => search(target.value)} />
          <i className="kaca fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
