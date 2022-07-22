import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="nav-header">
      <nav className="nav-bar">
        <Link className="button-wrapper" to="/mycollection">
          <button id="collection-button" className="Nav-button">
            My Collection
          </button>
        </Link>
        <Link className="button-wrapper" to="/">
          <button id="home-button" className="Nav-button">
            Home
          </button>
        </Link>
        {/* <Link to="/addmovies">
          <button className="Nav-button">Add Movie</button>
        </Link> */}
        <Link className="button-wrapper" to="/mywants">
          <button id="wants-button" className="Nav-button">
            My Wants
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
