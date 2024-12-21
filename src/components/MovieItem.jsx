import React from "react";
import './../index.css';

const MovieItem = ({ item }) => {
  return item.poster_path ? (
    <div className="movie">
      <div className="poster">
        <div className="quality">HD</div>
        <div className="rating">{Number(item.vote_average).toPrecision(2)}</div>
        <i className="fa fa-play play"></i>
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt="poster"
          draggable={false}
        />
      </div>
      <p>{item.original_title ? item.original_title : item.original_name}</p>

      <p className="poster-desc">
        <span>
          {item.release_date
            ? String(item.release_date).split("-")[0]
            : String(item.first_air_date).split("-")[0]}
        </span>
        {item.media_type && (
          <span className="type">
            <span style={{ textTransform: "uppercase" }}>
              {String(item.media_type).charAt(0)}
            </span>
            {String(item.media_type).substring(1)}
          </span>
        )}
      </p>
    </div>
  ) : null;
}

export default MovieItem;