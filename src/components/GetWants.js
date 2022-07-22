import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const GetWants = () => {
  const [wantedMovies, setWantedMovies] = useState([]);

  const getMovieWants = () => {
    var config = {
      method: "get",
      url: "/wants",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setWantedMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieWants();
  }, []);

  return (
    <div>
      <section className="movie-api-response-section">
        {wantedMovies.map((data) => (
          <MovieCard
            data={data}
            getMovieWants={getMovieWants}
            location={"fromWantsToCollection"}
          />
        ))}
      </section>
    </div>
  );
};

export default GetWants;
