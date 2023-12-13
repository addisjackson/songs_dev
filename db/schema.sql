DROP DATABASE IF EXISTS songs_dev;
DROP TABLE IF EXISTS songs;

CREATE DATABASE songs_dev;


-- Create the "songs" table if it doesn't exist
CREATE TABLE IF NOT EXISTS songs (
    id SERIAL PRIMARY KEY,
    artist VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    is_favorite BOOLEAN
);



CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_date VARCHAR(255)
);

