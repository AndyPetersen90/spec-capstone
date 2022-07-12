import React from "react";
import ManualMovieAdd from "./ManualMovieAdd";
import MovieCard from "./MovieCard";

const AddMovies = () => {
  return (
    <div>
      AddMovies
      <br />
      -add movie search input(movie search component?)
      <br />
      -manually add movie form(manually add movie component?)
      <br /> -movie title
      <br /> -movie poster url
      <br /> -movie rating
      <br /> -movies actors
      <br /> -movie details
      <br />
      -section to display returned movie search information using the movie card
      component
      <br />
      -each returned movie card will have an add button
      <MovieCard />
      <ManualMovieAdd />
    </div>
  );
};

export default AddMovies;
