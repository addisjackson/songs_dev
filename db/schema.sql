DROP DATABASE IF EXISTS songs_dev;
-- DROP TABLE IF EXISTS songs;

CREATE DATABASE songs_dev;

\c songs_dev;


CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  album TEXT,
  title TEXT,
  is_favorite BOOLEAN
);


CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_date DATE
);
