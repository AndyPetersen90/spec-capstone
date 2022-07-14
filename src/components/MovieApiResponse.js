import React from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieApiResponse.css";

const MovieApiResponse = (data) => {
  const responseMovies = data.data;
  console.log(responseMovies);

  return (
    <div>
      <section className="movie-api-response-section">
        {responseMovies.map((movies, index) => (
          <MovieCard movies={movies} index={index} />
        ))}
      </section>
    </div>
  );
};

export default MovieApiResponse;
