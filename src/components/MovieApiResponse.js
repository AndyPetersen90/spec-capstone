import React from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieApiResponse.css";

const MovieApiResponse = ({ data }) => {
  const responseMovies = data;
  // console.log(responseMovies);

  return (
    <div>
      <section className="movie-api-response-section">
        {responseMovies.map((data) => (
          <MovieCard data={data} />
        ))}
      </section>
    </div>
  );
};

export default MovieApiResponse;
