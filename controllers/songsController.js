const express = require("express");
const songs = express.Router();
const { getAllSongs, getOneSong, createSong, deleteSong, updateSong } = require("../queries/songs.js");
const { checkName, checkFavorite, checkAlbum, checkTitle, checkArtist } = require("../validation/checkSongs.js");

songs.get("/", async (req, res) => {
    try {
        const allSongs = await getAllSongs();
        res.status(200).json(allSongs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

songs.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const song = await getOneSong(id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ error: "Song not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

songs.post("/", checkName, checkFavorite, checkAlbum, checkTitle, checkArtist, async (req, res) => {
    try {
        const song = await createSong(req.body);
        res.json(song);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

songs.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSong = await deleteSong(id);

        if (deletedSong.id) {
            res.status(200).json(deletedSong);
        } else {
            res.status(404).json("Song Not Found");
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

songs.put("/:id", checkName, checkFavorite, checkAlbum, checkTitle, checkArtist, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSong = await updateSong(id, req.body);

        if (updatedSong.id) {
            res.status(200).json(updatedSong);
        } else {
            res.status(404).json({ error: "Song not updated for some reason..." });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = songs;
