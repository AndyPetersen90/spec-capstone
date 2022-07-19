import React, { useState } from "react";
import MovieApiResponse from "./MovieApiResponse";
import axios from "axios";

const MovieApi = ({ location }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const apiCall = async () => {
    if (search) {
      const options = {
        method: "GET",
        url: "https://movie-database-alternative.p.rapidapi.com/",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
        },
        params: { s: search, r: "json", page: "1" },
      };

      await axios
        .request(options)
        .then(function (response) {
          setData(response.data.Search);
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    setSearch("");
  };

  return (
    <div>
      <h3>MovieApi component</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Movie Title"
      />
      <button onClick={apiCall}>Search</button>
      <MovieApiResponse data={data} location={location} />
    </div>
  );
};

export default MovieApi;
