import React from "react";
import MovieItem from "./MovieItem";
import './../index.css';

const Movies = ({ movies, title, currentSelection, setCurrentSelection }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>{title}</h2>
        {title === "Trending" && (
          <div className="trend-btn-grp">
            <button
              className={`trend-btns ${currentSelection === "movie" ? "active" : ""
                }`}
              onClick={() => setCurrentSelection("movie")}
            >
              <i className="fa fa-play-circle mr-2">&nbsp; </i>Movies
            </button>
            <button
              className={`trend-btns ${currentSelection === "tv" ? "active" : ""
                }`}
              onClick={() => setCurrentSelection("tv")}
            >
              <i className="fa fa-list mr-2"></i>&nbsp; TV Shows
            </button>
          </div>
        )}
      </div>
      <div className="moviesCotainer">
        {movies.map((item, index) => {
          return <MovieItem item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Movies;