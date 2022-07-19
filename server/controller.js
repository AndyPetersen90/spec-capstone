require("dotenv").config();
const Sequelize = require("sequelize");
const axios = require("axios");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getAllMovies: (req, res) => {
    sequelize
      .query(`SELECT * FROM movie_table`)
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addMovieToDatabase: (req, res) => {
    console.log(req.body);
    const { Title, Poster, Genre, Actors, Plot, Rated, Released } = req.body;
    sequelize
      .query(
        `
      insert into movie_table (movie_title, movie_genre, movie_actors, movie_plot, movie_rating, movie_release_date)
        values ('${Title}', '${Poster}', '${Genre}', '${Actors}', '${Plot}', '${Rated}', '${Released}')
        returning *;
      `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addMovie: (req, res) => {
    const addMovieToDatabase = (req, res) => {
      const { Title, Poster, Genre, Actors, Plot, Rated, Released } = req;
      sequelize
        .query(
          `
        insert into movie_table (movie_title, movie_poster, movie_genre, movie_actors, movie_plot, movie_rating, movie_release_date)
          values ('${Title}', '${Poster}', '${Genre}', '${Actors}', '${Plot}', '${Rated}', '${Released}');
        `
        )
        .then((dbRes) => {
          // res.send(dbRes[0]);
          console.log(dbRes);
          // res.sendStatus(200);
          // console.log(dbRes[0]);
          //had to take out .status(200) it was giving me an error//
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const { imdbID } = req.body.id;

    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: `${imdbID}` },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (res) {
        addMovieToDatabase(res.data);
        console.log(`Here is data ${res.data}`);
      })
      .catch(function (error) {
        console.error(error);
      });
  },

  // addToFavorites: (req, res) => {}, feature to add later.
  addToWants: (req, res) => {
    console.log(req.body);
    const { Title, Poster, imdbID } = req.body;
    sequelize
      .query(
        `
      insert into movie_wants (movie_title, movie_poster, imdbID)
        values ('${Title}', '${Poster}', '${imdbID}')
      `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addFromWants: (req, res) => {
    /*To enable a backend api request to the rapid API, I wonder if I can write an axios request, that in the response will trigger a
    sequelize querey to directly send the api response to the database?*/
    console.log(req.body);
    const { Title, Poster, Genre, Actors, Plot, Rated, Released, id } =
      req.body;
    sequelize
      .query(
        `insert into movie_table (movie_title, movie_genre, movie_actors, movie_plot, movie_rating, movie_release_date)
        values ('${Title}', '${Poster}', '${Genre}', '${Actors}', '${Plot}', '${Rated}', '${Released}')
        returning *;

        delete from movie_wants
        where wants_id = '${id}'
      `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, //this will be a post and a delete. Delete from wants post to movie collection.

  deleteMovie: (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    sequelize
      .query(
        `DELETE FROM movie_table
          WHERE movie_id = '${id}';
          
        Delete from movie_collection
          where movie_id = '${id}`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
