import React from "react";
import "../styles/movieCard.css";
// import MovieInfo from "./MovieInfo";

const MovieCard = () => {
  return (
    <div>
      <h3>MovieCard component</h3>
      <section className="movie-card-section">
        <h3 className="movie-card-title">Black Widow</h3>
        <img
          className="movie-card-image"
          src="https://m.media-amazon.com/images/I/71lADxngTWS._AC_SL1050_.jpg"
          alt="Black Widow Poster"
        />
        <button className="movie-card-rating">Rating</button>
      </section>
    </div>
  );
};

export default MovieCard;
