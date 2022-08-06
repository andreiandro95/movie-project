import React from "react";
import FavoriteMovie from "../Components/FavoriteMovie";
import NoMovie from "../Components/NoMovie";

const Favorites = ({ favoritesMovies, deleteFavoriteMovie }) => {
  return (
    <>
      <div className="title-of-page">Favorites movies</div>
      {favoritesMovies.length > 0 ? (
        <div className="movie-list">
          {favoritesMovies.map((movie, key) => (
            <FavoriteMovie
              movie={movie}
              key={key}
              mykey={key}
              deleteFavoriteMovie={deleteFavoriteMovie}
            />
          ))}
        </div>
      ) : (
        <NoMovie />
      )}
    </>
  );
};

export default Favorites;
