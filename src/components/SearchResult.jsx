import React from "react";
import './../index.css';
import MovieItem from './MovieItem';

const SearchResult = ({ moviesResult }) => {
    return moviesResult.length > 0 ? (
      <div className="searchContainer">
        {moviesResult.map((item, index) => {
          return <MovieItem item={item} key={index} />;
        })}
      </div>
    ) : null;
  };

export default SearchResult;