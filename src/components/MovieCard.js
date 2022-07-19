import React from "react";
import axios from "axios";
import "../styles/movieCard.css";

const MovieCard = ({ data, location }) => {
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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="movie-card-section">
      <h3 className="movie-card-title">{data.Title}</h3>
      <img
        className="movie-card-image"
        src={data.Poster}
        alt="Black Widow Poster"
      />
      <h4 className="movie-card-rating">{data.Year}</h4>
      {location === "addToCollection" ? (
        <button onClick={() => addMovieAxiosCall(data.imbdbId)}>
          Add To Movie Collection
        </button>
      ) : null}
      {/* {location === "addToWants" ? (
        <button onClick={*****Need To Create this Axios first******}>
          Add To Wants
        </button>
      ) : null} */}
    </div>
  );
};

export default MovieCard;
