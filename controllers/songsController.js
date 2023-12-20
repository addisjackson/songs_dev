const express = require("express");
const songs = express.Router();

const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong
} = require("../queries/songs.js");
const { checkName, checkFavorite, checkAlbum, checkArtist } = require("../validation/checkSongs.js");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

songs.post("/", [checkName, checkFavorite, checkAlbum, checkArtist], async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  // if our response has an ID we are good to go!
  // an error will NOT have an id
  if (deletedSong.id) {
    res.status(200).json(deletedSong)
  } else {
    res.status(404).json("Song not found!");
  }
});

songs.put("/:id", checkName, checkFavorite, checkAlbum, checkArtist, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(req.body, id);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json({error: "Song not updated."});
  }
})

module.exports = songs;
// EXPORT our Songs Router
