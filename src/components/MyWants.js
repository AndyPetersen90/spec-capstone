import React from "react";
import ManualMovieAdd from "./ManualMovieAdd";
import MovieApi from "./MovieApi";
import MovieCard from "./MovieCard";

const MyWants = () => {
  return (
    <div>
      MyWants titles
      <br />
      <MovieApi />
      <br />
      add movie manually to wanted list(manually add a movie component?)
      <br />
      list of wanted movies using movie card component and additional component
      for a button to add to collection or delete from wanted section.
      <MovieCard />
      <ManualMovieAdd />
    </div>
  );
};

export default MyWants;
