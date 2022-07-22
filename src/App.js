import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MyCollection from "./components/MyCollection";
// import Favorites from "./components/Favorites";
import AddMovies from "./components/AddMovies";
import MyWants from "./components/MyWants";
import AddToWants from "./components/AddToWants";
// import MovieInfo from "./components/future/MovieInfo";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycollection" element={<MyCollection />} />
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        <Route path="/addmovies" element={<AddMovies />} />
        <Route path="/addtowants" element={<AddToWants />} />
        <Route path="/mywants" element={<MyWants />} />
        {/* <Route path="/movieinfo" element={<MovieInfo />} /> */}
      </Routes>
    </div>
  );
};

export default App;
