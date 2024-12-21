import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Movies from "./components/Movies";
import useFetchMovies from "./components/FetchMovies";

const menuItems = [
  "HOME",
  "GENRE",
  "COUNTRY",
  "MOVIES",
  "TV SHOWS",
  "TOP IMDB",
  "ANDROID APP",
];

const headerDesc =
  "Want to know where you can watch Tv series or web series for free in 2020? This website is one of the best websites to stream your favourite series online. We bring to you world class series watching experience in HDR quality. Free series streaming and download. Experience like never before. Watch brand new series or old classic ones 720p and 180p with HD quality online. Watch recently released web series and TV series only here. Don’t miss any season or episode, stream today!";

// https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&with_origin_country=IN&language=en-US&page=$1
// https://api.themoviedb.org/3/trending/tv/day?api_key=${APIKEY}&with_origin_country=IN&page=1
// `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&with_origin_country=IN&language=en-US&query=${query}&page=1&include_adult=false`


export default function App() {
  const [currentSelection, setCurrentSelection] = useState("movie");
  const [query, setQuery] = useState("");
  const [moviesResult, setMoviesResult] = useState([]);

  const { movies, upcoming } = useFetchMovies(currentSelection);

  return (
    <div>
      <Header menuItems={menuItems} />
      <SearchBar query={query} setQuery={setQuery} setMoviesResult={setMoviesResult} />
      <SearchResult moviesResult={moviesResult} />
      <div className="header-desc">{headerDesc}</div>
      <Movies
        movies={movies}
        title={"Trending"}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      <Movies movies={upcoming} title={"Coming Soon"} />
    </div>
  );
}