import React from "react";
// import { Link } from "react-router-dom";
import GetCollection from "./GetCollection";

const MyCollection = () => {
  return (
    <div>
      {/* <nav className="add-collection-wrapper">
        <Link to="/addmovies">
          <button className="add-movie-button">Add Movie</button>
        </Link>
      </nav> */}
      <GetCollection />
    </div>
  );
};

export default MyCollection;
