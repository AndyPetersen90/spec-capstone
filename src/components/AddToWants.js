import React from "react";
import MovieApi from "./MovieApi";

const AddToWants = () => {
  return (
    <div>
      Add A Movie To your Wants List.
      <br />
      <MovieApi location={"addToWants"} />
      -section to display returned movie search information using the movie card
      component
      <br />
      -each returned movie card will have an add button
    </div>
  );
};

export default AddToWants;
