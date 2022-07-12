import React from "react";

const ManualMovieAdd = () => {
  return (
    <div>
      <h3>ManualMovieAdd component</h3>
      -this will be the form to manually add a movie title
      <br />
      form will need:
      <div>
        <input type="text" placeholder="Movie Title" />
        <input type="url" placeholder="Poster URL" />
        <input type="text" placeholder="rating" />
        <input type="text" placeholder="Actors in this Movie" />
        <input type="text" placeholder="Short movie explination" />
      </div>
    </div>
  );
};

export default ManualMovieAdd;
