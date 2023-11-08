const express = require("express");
const albums = express.Router();
const { getAllAlbums, getAlbumById, createAlbum, updateAlbum, deleteAlbum } = require("../queries/albums.js"); // Corrected import statement

// Route to get all albums
albums.get("/", async (req, res) => {
  try {
    const albumsList = await albumController.getAllAlbums(); // Updated variable name to avoid naming conflict
    res.status(200).json(albumsList); // Updated variable name
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to get a single album by ID
albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const album = await albumController.getAlbumById(id);
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to create a new album
albums.post("/", async (req, res) => {
  const { title, release_date } = req.body;
  try {
    const album = await albumController.createAlbum(title, release_date);
    res.status(201).json(album);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to update an album by ID
albums.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, release_date } = req.body;
  try {
    const album = await albumController.updateAlbum(id, title, release_date);
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to delete an album by ID
albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowCount = await albumController.deleteAlbum(id);
    if (rowCount === 1) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Album not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = albums;
