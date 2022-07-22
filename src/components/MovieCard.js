import React from "react";
import axios from "axios";
import "../styles/movieCard.css";

const MovieCard = ({ data, location, getMovieWants, getMovieCollection }) => {
  const addMovieAxiosCall = () => {
    var idData = JSON.stringify({
      id: data,
    });

    var config = {
      method: "post",
      url: "/addcollection",
      headers: {
        "Content-Type": "application/json",
      },
      data: idData,
    };

    axios(config)
      .then(function (response) {
        alert("Movie has been added to your collection!");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addToWantsList = () => {
    var idData = JSON.stringify({
      id: data,
    });

    var config = {
      method: "post",
      url: "/addtowants",
      headers: {
        "Content-Type": "application/json",
      },
      data: idData,
    };

    axios(config)
      .then(function (response) {
        alert("Movie has been added to your Wants list!");
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addWantsToCollection = () => {
    var idData = JSON.stringify({
      id: data,
    });

    var config = {
      method: "post",
      url: "/fromwants",
      headers: {
        "Content-Type": "application/json",
      },
      data: idData,
    };

    axios(config)
      .then(function (response) {
        alert("Movie has been added to your collection!");
        getMovieWants();
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeFromCollection = () => {
    var idData = JSON.stringify({
      id: data,
    });

    var config = {
      method: "delete",
      url: "/deletecollection",
      headers: {
        "Content-Type": "application/json",
      },
      data: idData,
    };

    axios(config)
      .then(function (response) {
        alert("Movie has been removed from your collection!");
        getMovieCollection();
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="movie-card-section">
      <h3 className="movie-card-title">{data.Title || data.movie_title}</h3>
      <img
        className="movie-card-image"
        src={data.Poster || data.movie_poster}
        alt="Movie Poster"
      />
      <h4 className="movie-card-rating">
        {data.Year || data.movie_release_date || data.movie_year}
      </h4>
      {location === "addToCollection" ? (
        <button onClick={() => addMovieAxiosCall(data.imbdbId)}>
          Add To Movie Collection
        </button>
      ) : null}
      {location === "addToWants" ? (
        <button onClick={addToWantsList}>Add To Wants List</button>
      ) : null}
      {location === "fromWantsToCollection" ? (
        <button onClick={addWantsToCollection}>Add To Collection</button>
      ) : null}
      {location === "inMovieCollection" ? (
        <button onClick={removeFromCollection}>Remove</button>
      ) : null}
    </div>
  );
};

export default MovieCard;
