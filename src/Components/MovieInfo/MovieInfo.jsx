import { React, useState, useEffect } from "react";
import "./movieinfo.css";
import { useNavigate, useParams } from "react-router-dom";
const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieInfo = async () => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=30dc94ac`;
    const res = await fetch(url);

    const resJSON = await res.json();

    if (resJSON) {
      setMovie(resJSON);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, [id]);

  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/react-movie-app");
  };

  if (!movie) return <p>Loading</p>;
  else {
    return (
      <section className="movie-info">
        <div className="movie-image">
          <img src={movie.Poster} alt="movie-img" />
        </div>
        <div className="movie-text-info">
          <h2>
            <span>Title:</span> {movie.Title}
          </h2>
          <h2>
            <span>Director:</span> {movie.Director}
          </h2>
          <h2>
            <span>Awards:</span> {movie.Awards}
          </h2>
          <h2>
            <span>Year:</span> {movie.Year}
          </h2>
        </div>
        <button className="btn-primary" onClick={() => returnToHome()}>
          Go Back
        </button>
      </section>
    );
  }
};

export default MovieInfo;
