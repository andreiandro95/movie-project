import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";

import "./Style/homepage.css";

import axios from "axios";
import { baseUrl } from "./config/baseUrl";
import { apiKey } from "./config/apiKey";
import { useEffect, useState } from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [hideLoadMoreBtn, setHideLoadMoreBtn] = useState(false);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const [homepageTitle, setHomepageTitle] = useState("top rated movies");
  const [isLoading, setIsLoading] = useState(false);
  const [noSearchResults, setNoSearchResults] = useState(false);

  const topRatedMoviesApi = `${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${pageNumber}`;

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(topRatedMoviesApi);
      setMovieList(movieList.concat(res.data.results));
      if (res.data.total_pages === pageNumber) {
        setHideLoadMoreBtn(true);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  const loadMoreMovies = () => {
    setPageNumber((prevVal) => prevVal + 1);
  };

  const addToFavorites = (movieId) => {
    let selectedMovie = movieList.filter((movie) => movie.id === movieId);
    setFavoritesMovies((oldArray) => [...oldArray, selectedMovie[0]]);
  };

  const deleteFavoriteMovie = (movieId) => {
    setFavoritesMovies(favoritesMovies.filter((movie) => movie.id !== movieId));
  };

  const handleSubmit = (inputVal) => {
    const searchMoviesApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputVal}`;
    const searchMovies = async () => {
      try {
        const res = await axios.get(searchMoviesApi);
        setMovieList(res.data.results);
        res.data.results.length === 0 && setNoSearchResults(true);
      } catch (err) {
        console.log(err.response.statusText);
      }
    };

    setHideLoadMoreBtn(true);
    setHomepageTitle("searched movies");
    searchMovies();
  };

  const clearSearch = async () => {
    const res = await axios.get(topRatedMoviesApi);
    setMovieList(res.data.results);
    setHideLoadMoreBtn(false);
    setNoSearchResults(false);
    setHomepageTitle("top rated movies");
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/movie-project/"
            element={
              <Home
                movieList={movieList}
                hideLoadMoreBtn={hideLoadMoreBtn}
                loadMoreMovies={loadMoreMovies}
                addToFavorites={addToFavorites}
                handleSubmit={handleSubmit}
                clearSearch={clearSearch}
                homepageTitle={homepageTitle}
                isLoading={isLoading}
                noSearchResults={noSearchResults}
              />
            }
          />
          <Route
            exact
            path="/movie-project/favorites"
            element={
              <Favorites
                favoritesMovies={favoritesMovies}
                deleteFavoriteMovie={deleteFavoriteMovie}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
