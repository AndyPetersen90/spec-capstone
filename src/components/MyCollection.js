import React from "react";
import MovieCard from "./MovieCard";

const MyCollection = () => {
  return (
    <div>
      <br />
      MyCollection title
      <br />
      -movie filtering options
      <div>
        -filter alphabetical
        <br />
        -filter genre
        <br />
        -filter rating
      </div>
      <br />
      -display movie poster and name
      <br />
      -15 movies per page
      <br />
      -page changing options
      <MovieCard />
    </div>
  );
};

export default MyCollection;
