import React from "react";

const FavoriteMovie = ({ movie, mykey, deleteFavoriteMovie }) => {
  return (
    <>
      <div key={mykey} className="movie">
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
              onClick={() => deleteFavoriteMovie(movie.id)}
            >
              <span>remove from favorites</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteMovie;
