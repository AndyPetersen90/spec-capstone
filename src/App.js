import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MyCollection from "./components/MyCollection";
import Favorites from "./components/Favorites";
import AddMovies from "./components/AddMovies";
import MyWants from "./components/MyWants";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycollection" element={<MyCollection />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="addmovies" element={<AddMovies />} />
        <Route path="mywants" element={<MyWants />} />
      </Routes>
      {/* <img
        src="https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbWlzY2VtcHR5cm9vbS1mb24tcm9vbS10eXBlMS1saWdodDItMDEuanBn.jpg"
        alt="background-img"
      /> */}
    </div>
  );
};

export default App;
