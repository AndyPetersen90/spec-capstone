import React from "react";
import { Link } from "react-router-dom";
import GetWants from "./GetWants";

const MyWants = () => {
  return (
    <div>
      <Link to="/addtowants">
        <button className="Nav-button">Add Movie</button>
      </Link>
      MyWants titles
      <br />
      <br />
      list of wanted movies using movie card component and additional component
      for a button to add to collection or delete from wanted section.
      <GetWants />
    </div>
  );
};

export default MyWants;
