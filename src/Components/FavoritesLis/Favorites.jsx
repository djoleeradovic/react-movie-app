import { React, useContext } from "react";
import "./favorites.css";
import { movieContext } from "../../App";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(movieContext);

  return (
    <section className="favorite-list">
      <h2>FAVORITES</h2>
      <div>
        {favorites.map((movie, index) => (
          <article className="movie" key={index}>
            <div className="movie-img">
              <Link to={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt="movie-poster" />
              </Link>
            </div>
            <div className="overlay">
              <button
                className="btn-primary"
                onClick={() => removeFavorite(movie)}
              >
                Remove
                <AiFillHeart />{" "}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
