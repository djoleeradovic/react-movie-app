import { React, useContext } from "react";
import "./movielist.css";
import { movieContext } from "../../App";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { movies, addFavorite } = useContext(movieContext);

  return (
    <section className="movie-list">
      <h2>Search</h2>
      <div>
        {movies.map((movie, index) => (
          <article className="movie" key={index}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt="movie-poster" />
            </Link>

            <div className="overlay">
              <button
                className="btn-primary"
                onClick={() => addFavorite(movie)}
              >
                Favorites
                <AiFillHeart />{" "}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MovieList;