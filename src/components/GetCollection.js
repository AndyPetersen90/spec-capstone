import React from "react";
import axios from "axios";
// import MovieCard from "./MovieCard";

const GetCollection = () => {
  const getMovieCollection = () => {
    var config = {
      method: "get",
      url: "/mycollection",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        const movieCollection = response.data;
        return movieCollection;
      })
      .catch(function (error) {
        console.log(error);
      });
    // return movieCollection;
  };

  getMovieCollection();

  return (
    <div>
      {/* <section className="movie-api-response-section">
        {movieCollection.map((data) => (
          <MovieCard data={data} />
        ))}
      </section> */}
    </div>
  );
};

export default GetCollection;
