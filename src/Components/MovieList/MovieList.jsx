import { React, useContext } from "react";
import "./movielist.css";
import { movieContext } from "../../App";
import { AiFillHeart } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";

const MovieList = () => {
  const { movies, addFavorite, setRecents } = useContext(movieContext);

  const addRecents = (movie) => {
    setRecents((recents) => {
      if (recents.length > 4) {
        return [movie, ...recents.slice(0, -1)];
      } else {
        return [movie, ...recents];
      }
    });
  };

  return (
    <section className="movie-list">
      <h2>Search</h2>
      <div>
        {movies.map((movie, index) => (
          <article className="movie" key={index}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                onClick={() => addRecents(movie)}
                alt="movie-poster"
              />
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
      <Outlet />
    </section>
  );
};

export default MovieList;
