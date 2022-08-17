import React, { useState } from "react";
import MovieApiResponse from "./MovieApiResponse";
import axios from "axios";
import "../styles/addmovies.css";

const MovieApi = ({ location }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const apiCall = () => {
    axios
      .get(`/movie/${search}`)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setSearch("");
  };

  // const apiCall = async () => {
  //   if (search) {
  //     const options = {
  //       method: "GET",
  //       url: "https://movie-database-alternative.p.rapidapi.com/",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           process.env.REACT_APP_RAPID_API_KEY || process.env.HEROKU_KEY,
  //         "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  //       },
  //       params: { s: search, r: "json", page: "1" },
  //     };

  //     await axios
  //       .request(options)
  //       .then(function (response) {
  //         setData(response.data.Search);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }

  //   setSearch("");
  // };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      setSearch(e.target.value);
      apiCall();
    }
  };

  return (
    <div className="movie-api-search-container">
      <h3 className="movie-api-title">Lets Add A Movie!</h3>
      <div className="search-and-submit-button">
        <input
          className="movie-api-input-box"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeypress}
          placeholder="Movie Title"
        />
        <button className="search-button" onClick={apiCall} type="submit">
          Search
        </button>
      </div>
      <MovieApiResponse data={data} location={location} />
    </div>
  );
};

export default MovieApi;
