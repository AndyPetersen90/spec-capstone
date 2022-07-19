import React from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieApiResponse.css";
// import axios from "axios";

const MovieApiResponse = ({ data, location }) => {
  const responseMovies = data;

  return (
    <div>
      <section className="movie-api-response-section">
        {responseMovies.map((data) => (
          <MovieCard data={data} location={location} />
        ))}
      </section>
    </div>
  );
};

export default MovieApiResponse;
