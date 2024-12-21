import React, { useState, useEffect } from "react";
import './../index.css';
const APIKEY = "1efe3716ab36633b8d2d333ff6caf35b";

const SearchBar = ({ setMoviesResult }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchMovies = async () => {
      if (query.length < 3) {
        setMoviesResult([]); // Clear results if query is too short
        return;
      }
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&with_origin_country=IN&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const data = await res.json();
      setMoviesResult(data.results);
    }
    searchMovies();
  }, [query, setMoviesResult]);

  return (
    <div className="sub-header">
      <h5>Find Movies, TV shows and more</h5>
      <div className="search-container">
        <div className="searchIcon">
          <i className="fa fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Enter Keyword.."
          className="searchbar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="searchbtn" type="submit">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="header-fix"></div>
    </div>
  );
};

export default SearchBar;