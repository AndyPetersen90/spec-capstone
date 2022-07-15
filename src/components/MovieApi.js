import React, { useState } from "react";
import MovieApiResponse from "./MovieApiResponse";
import axios from "axios";

/************************************************************************** 
    I need to find a way to configure the below axios request code from Rapid API so that it works for 
    the react useEffect method. Also need to understand how to use the component as well as pass down
    props to the request as well as find a way to return the requested information and display it
    on the pages its being used on.
**************************************************************************/

const MovieApi = () => {
  const [data, setData] = useState({});
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

      axios
        .request(options)
        .then(function (response) {
          setData(response.data);
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
      <MovieApiResponse data={data.Search} />
    </div>
  );
};

export default MovieApi;
