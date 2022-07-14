import React from "react";
import "../styles/movieCard.css";
// import MovieInfo from "./MovieInfo";

const MovieCard = (movies) => {
  console.log(movies.movies);

  return (
    <div className="movie-card-section">
      <h3 className="movie-card-title">{movies.movies.Title}</h3>
      <img
        className="movie-card-image"
        // src="https://m.media-amazon.com/images/I/71lADxngTWS._AC_SL1050_.jpg"
        src={movies.movies.Poster}
        alt="Black Widow Poster"
      />
      <button className="movie-card-rating">{movies.movies.Year}</button>
    </div>
  );

  // return (
  //   <div>
  //     <h3>MovieCard component</h3>
  //     <section className="movie-card-section">
  //       <h3 className="movie-card-title">Title</h3>
  //       <img
  //         className="movie-card-image"
  //         src="https://m.media-amazon.com/images/I/71lADxngTWS._AC_SL1050_.jpg"
  //         alt="Black Widow Poster"
  //       />
  //       <button className="movie-card-rating">Year</button>
  //     </section>
  //   </div>
  // );
};

export default MovieCard;
