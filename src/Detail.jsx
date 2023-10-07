import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?page=1&api_key=d74436658d07c3f8020f38ee827e6bec`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="wrapper">
      <img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}?page=1`} alt="" className="image-detail" />
      <div className="card-detail m-5">
        <div className="row g-0">
          <div className="col-md">
            <div className="card-body">
              <h1 className="card-title">{movies.title}</h1>
              <p>{movies.genres ? movies.genres.map((genre) => genre.name).join(', ') : 'Tidak ada data genres'}</p>
              <p className="card-text">{movies.overview}</p>
              <p>
                <i className="bintang fa-solid fa-star"></i> {parseFloat(movies.vote_average).toFixed(1)} / 10
              </p>
            </div>
          </div>
        </div>
        <Link to="/new">
          <button className="link">
            <i className="fa-solid fa-magnifying-glass"></i> SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
