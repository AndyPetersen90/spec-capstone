import React from "react";
import "../styles/MovieInfo.css";

const MovieInfo = () => {
  return (
    <div className="movie-info-wrapping-div">
      <h2 className="movie-info-title">Avengers: Endgame</h2>
      <div className="movie-info-main-div">
        <div className="rating-actors-div">
          <h4 className="movie-info-rating-title">Rated</h4>
          <p className="movie-info-rating">PG-13</p>
          <h4 className="movie-info-actors-title">Actors</h4>
          <p className="movie-info-actors">
            Robert Downey Jr., Chris Evans, Mark Ruffalo
          </p>
          <h4 className="movie-info-imdbrating-title">imdbRating</h4>
          <p className="movie-info-imdbrating">8.4</p>
        </div>
        <div className="poster-div">
          <img
            className="movie-info-poster"
            src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
            alt="Avengers Poster"
          />
        </div>
        <div className="movie-plot-div">
          <h4 className="movie-info-plot-title">Plot</h4>
          <p className="movie-info-plot">
            "After the devastating events of Avengers: Infinity War (2018), the
            universe is in ruins. With the help of remaining allies, the
            Avengers assemble once more in order to reverse Thanos' actions and
            restore balance to the universe."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
