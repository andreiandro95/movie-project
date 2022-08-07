import React from "react";
import LoadingElement from "./LoadingElement";

const TopRatedMovie = ({ movie, movieId, addToFavorites, isLoading }) => {
  return (
    <>
      <div key={movieId} className="movie">
        {!isLoading ? (
          <>
            <div className="image">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <div className="information">
              <div className="name">
                <span>{movie.title}</span>
              </div>
              <div className="release">
                <span>{movie.release_date.split("-").reverse().join("-")}</span>
              </div>
              <div className="add-to-favorites">
                <button
                  className="add-btn"
                  onClick={() => addToFavorites(movieId)}
                >
                  <span>add to favorites</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <LoadingElement />
        )}
      </div>
    </>
  );
};

export default TopRatedMovie;
