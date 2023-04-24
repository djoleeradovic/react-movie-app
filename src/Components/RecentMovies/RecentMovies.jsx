import { React, useContext } from "react";
import "../MovieList/movielist.css";
import { movieContext } from "../../App";
import { Link } from "react-router-dom";

const RecentMovies = () => {
  const { recents } = useContext(movieContext);
  return (
    <section className="movie-list">
      <h2>RECENTS</h2>
      <div>
        {recents.map((movie, index) => (
          <article className="movie" key={index}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt="movie-poster" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentMovies;
