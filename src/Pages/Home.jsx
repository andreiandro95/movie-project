import React from "react";
import NoMovie from "../Components/NoMovie";
import SearchForm from "../Components/SearchForm";
import TopRatedMovie from "../Components/TopRatedMovie";

const Home = ({
  movieList,
  hideLoadMoreBtn,
  loadMoreMovies,
  addToFavorites,
  handleSubmit,
  clearSearch,
  homepageTitle,
  isLoading,
  noSearchResults,
}) => {
  return (
    <>
      <SearchForm handleSubmit={handleSubmit} clearSearch={clearSearch} />
      <div className="title-of-page">{homepageTitle}</div>
      <div className="movie-list">
        {!noSearchResults ? (
          movieList.map((movie, key) => (
            <TopRatedMovie
              movie={movie}
              key={movie.id}
              movieId={movie.id}
              addToFavorites={addToFavorites}
              isLoading={isLoading}
            />
          ))
        ) : (
          <NoMovie />
        )}

        {!hideLoadMoreBtn && (
          <div className="load-more">
            <span onClick={loadMoreMovies}>load more</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
