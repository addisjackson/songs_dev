const express = require("express");
const albums = express.Router();

const {
  getAllAlbums,
  getAlbum,
  createAlbum,
  deleteAlbum,
  updateAlbum
} = require("../queries/albums.js");
const { checkReleaseDate } = require("../validation/checkSongs")

albums.get("/", async (req, res) => {
  const allAlbums = await getAllAlbums();
  if (allAlbums[0]) {
    res.status(200).json(allAlbums);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

albums.get("/:id", async (req, res) => {
  const { id } = req.params;
  const album = await getAlbum(id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

albums.post("/", checkReleaseDate, async (req, res) => {
  try {
    const album = await createAlbum(req.body);
    res.json(album)
  } catch (error) {
    return error;
  }
});

albums.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedAlbum = await deleteAlbum(id);

  if (deletedAlbum.id) {
    res.status(200).json(deletedAlbum)
  } else {
    res.status(404).json("Album not found!");
  }
});

albums.put("/:id", checkReleaseDate, async (req, res) => {
  const { id } = req.params;

  const updatedAlbum = await updateAlbum(req.body, id);
  if (updatedAlbum.id) {
    res.status(200).json(updatedAlbum);
  } else {
    res.status(404).json({error: "Album not updated"});
  }
})

module.exports = albums;
// EXPORT our Albums Router
