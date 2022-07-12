import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <button className="Nav-button">Home</button>
        </Link>
        <Link to="/mycollection">
          <button className="Nav-button">My Collection</button>
        </Link>
        <Link to="addmovies">
          <button className="Nav-button">Add Movie</button>
        </Link>
        <Link to="/favorites">
          <button className="Nav-button">My Favorites</button>
        </Link>
        <Link to="mywants">
          <button className="Nav-button">My Wants</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
