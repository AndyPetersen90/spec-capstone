import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieFilter from "./MovieFilter";

const GetCollection = () => {
  const [collectedMovies, setCollectedMovies] = useState([]);

  const getMovieCollection = () => {
    var config = {
      method: "get",
      url: "/mycollection",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        setCollectedMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieCollection();
  }, []);

  collectedMovies.sort((a, b) => {
    let fa = a.movie_title.toLowerCase(),
      fb = b.movie_title.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <MovieFilter
        data={collectedMovies}
        location={"inMovieCollection"}
        getMovieCollection={getMovieCollection}
        GetCollection={GetCollection}
      />
    </div>
  );
};

export default GetCollection;
