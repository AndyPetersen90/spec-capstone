import React from "react";
import "../styles/movieCard.css";

const MovieCard = ({ data }) => {
  // console.log(data);

  return (
    <div className="movie-card-section">
      <h3 className="movie-card-title">{data.Title}</h3>
      <img
        className="movie-card-image"
        src={data.Poster}
        alt="Black Widow Poster"
      />
      <h4 className="movie-card-rating">{data.Year}</h4>
    </div>
  );
};

export default MovieCard;
