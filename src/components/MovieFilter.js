import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "../styles/moviefilter.css";
import { Link } from "react-router-dom";

const MovieFilter = ({ data, getMovieCollection }) => {
  const [filterGenre, setFilterGenre] = useState("Genre");
  const [filterRating, setFilterRating] = useState("Rating");

  let movieRatingList = data.map((movieRatingData) =>
    movieRatingData.movie_rating.split(",")
  );
  let movieRating = movieRatingList.flat();

  let arrayRating = [];

  movieRating.forEach((element) => {
    if (!arrayRating.includes(element.trim())) {
      arrayRating.push(element.trim());
    }
  });

  let movieGenreList = data.map((movieGenreData) =>
    movieGenreData.movie_genre.split(",")
  );
  let movieGenre = movieGenreList.flat();
  let arrayGenre = [];
  movieGenre.forEach((element) => {
    if (!arrayGenre.includes(element.trim())) {
      arrayGenre.push(element.trim());
    }
  });

  return (
    <div className="main-filter-div-container">
      <div className="add-form-div-wrapper">
        <nav className="add-collection-wrapper">
          <Link to="/addmovies">
            <button className="add-movie-button">Add Movie</button>
          </Link>
        </nav>
        <form className="dropdown-form">
          <select
            className="genre-dropdown"
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option value="Genre">Select Genre</option>
            {arrayGenre.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
          <select
            className="rating-dropdown"
            onChange={(e) => setFilterRating(e.target.value)}
          >
            <option value="Rating">Select Rating</option>
            {arrayRating.map((data) => (
              <option value={data}>{data}</option>
            ))}
          </select>
          <button
            className="dropdown-reset-button"
            onClick={(e) => {
              setFilterRating("Rating");
              setFilterGenre("Genre");
              e.target.parentNode.reset();
              e.preventDefault();
            }}
          >
            Reset
          </button>
        </form>
      </div>
      <section className="movie-api-response-section">
        {data
          .filter((data) => {
            if (filterGenre !== "Genre") {
              return data.movie_genre.includes(filterGenre);
            } else {
              return data;
            }
          })
          .filter((data) => {
            if (filterRating.length < 6) {
              return data.movie_rating.length === filterRating.length;
            } else {
              return data;
            }
          })
          .map((data) => (
            <MovieCard
              data={data}
              location={"inMovieCollection"}
              getMovieCollection={getMovieCollection}
            />
          ))}
      </section>
    </div>
  );
};

export default MovieFilter;
