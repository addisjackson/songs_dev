const db = require("../db/dbConfig");

// Get all albums
const getAllAlbums = async () => {
  try {
    const albums = await db.any("SELECT * FROM albums");
    return albums;
  } catch (error) {
    throw error;
  }
};

// Get a single album by ID
const getAlbumById = async (id) => {
  try {
    const album = await db.one("SELECT * FROM albums WHERE id = $1", id);
    return album;
  } catch (error) {
    throw error;
  }
};

// Create a new album
const createAlbum = async (title, release_date) => {
  try {
    const album = await db.one(
      "INSERT INTO albums (title, release_date) VALUES ($1, $2) RETURNING *",
      [title, release_date]
    );
    return album;
  } catch (error) {
    throw error;
  }
};

// Update an album by ID
const updateAlbum = async (id, title, release_date) => {
  try {
    const album = await db.one(
      "UPDATE albums SET title = $1, release_date = $2 WHERE id = $3 RETURNING *",
      [title, release_date, id]
    );
    return album;
  } catch (error) {
    throw error;
  }
};

// Delete an album by ID
const deleteAlbum = async (id) => {
  try {
    const result = await db.result("DELETE FROM albums WHERE id = $1", id);
    return result.rowCount;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
