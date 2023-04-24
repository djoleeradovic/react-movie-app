import { React, useState, useEffect, createContext } from "react";
import { Header, Favorites, MovieInfo } from "./Components";
import HomePage from "./HomePage/HomePage";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
export const movieContext = createContext();

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [recents, setRecents] = useState([]);

  const getMovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=30dc94ac`;
    const res = await fetch(url);
    const resJSON = await res.json();

    if (resJSON.Search) {
      setMovies(resJSON.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  const addFavorite = (movie) => {
    const newFavs = [movie, ...favorites];
    setFavorites(newFavs);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = (movie) => {
    setFavorites(
      favorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
    );
  };

  const location = useLocation();
  const isMovieInfo = location.pathname.includes("/movie");
  return (
    <movieContext.Provider
      value={{
        movies,
        setSearchValue,
        favorites,
        addFavorite,
        removeFavorite,
        recents,
        setRecents,
      }}
    >
      {!isMovieInfo && <Header />}
      <div className="container">
        <Routes>
          <Route path="/react-movie-app" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </movieContext.Provider>
  );
};

export default App;
