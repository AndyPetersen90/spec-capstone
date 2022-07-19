import React from "react";
// import ManualMovieAdd from "./ManualMovieAdd";
import MovieApi from "./MovieApi";

const AddMovies = () => {
  return (
    <div>
      AddMovies
      <br />
      <MovieApi location={"addToCollection"} />
      -section to display returned movie search information using the movie card
      component
      <br />
      -each returned movie card will have an add button
      {/* <ManualMovieAdd /> */}
    </div>
  );
};

export default AddMovies;
