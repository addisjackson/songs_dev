const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong,createSong, deleteSong, updateSong} = require("../queries/songs.js");
const {checkName, checkBoolean} = require("../validation/checkSongs.js");

songs.get("/", async (req, res) => {

    const allSongs = await getAllSongs();

    if (allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "server error!"})
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.json(song)
    } else {
        res.status(404).json({error: "not found"});
    }
})

songs.post("/", checkName, checkBoolean, async (req, res) => {
  const {name, favorite, album, artist} = req.body;
    try {
        const newSong = await createSong(req.body);
        res.json(newSong);
    } catch (error) {
        return error;
    }
})


songs.delete("/:id", async (req, res) => {
const {id} = req.params;

const deletedSong = await deleteSong(id);

if (deletedSong.id)  {
    res.status(200).json(deletedSong)
} else {
    res.status(404).json("Song Not Found")
}

})


songs.put("/:id", checkName, checkBoolean, async (req, res) => {
const { id }  = req.params;
const updatedSong = await updateSong(req.body, id)


if (updatedSong.id) {
res.status(200).json(updatedSong)
} else {
res.status(404).json({error : "Song not updated for some reason..."})
}

})




module.exports = songs;
