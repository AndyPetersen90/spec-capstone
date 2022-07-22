require("dotenv").config();
const Sequelize = require("sequelize");

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
  seed: (req, res) => {
    sequelize
      .query(
        `
    drop table if exists movie_table;
    drop table if exists users;
    drop table if exists movie_collection;
    drop table if exists favorite_movies;
    drop table if exists movie_wants;

    create table movie_table (
      movie_id serial primary key,
      movie_title varchar(50),
      movie_poster text,
      movie_genre varchar(100),
      movie_actors varchar(100),
      movie_plot text,
      movie_rating varchar(10),
      movie_release_date date
    );

    create table users(
      user_id serial primary key,
      first_name varchar(20),
      last_name varchar(20),
      username varchar(20),
      password varchar(100)
    );

    create table movie_collection(
      movie_id integer references movie_table(movie_id),
      user_id integer references users(user_id),
      collection_id serial primary key
    );

    create table favorite_movies (
      user_id integer references users(user_id),
      reason text,
      movie_id integer references movie_table(movie_id),
      favorites_id serial primary key
    );

    create table movie_wants (
      user_id integer references users(user_id),
      wants_id serial primary key,
      movie_title varchar(50),
      movie_poster text,
      imdbID varchar(30)
    );
    
    insert into movie_table (movie_title, movie_poster, movie_genre, movie_actors, movie_plot, movie_rating, movie_release_date)
      values ('Avengers: Endgame', 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg', 'Action, Adventure, Drama', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.', 'PG-13', '2019' );
    
    insert into users (first_name, last_name, username, password)
      values ('Andrew', 'Petersen', 'TheManFes', '1234Fes');

    `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
