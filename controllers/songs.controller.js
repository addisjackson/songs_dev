const express = require('express');
const router = express.Router();
const { getAllSongs, getOneSong, createSong, deleteSong, updateSong } = require('../queries/songs.js');
const { checkName, checkArtist, checkAlbum, checkTitle, checkFavorite } = require('../Validation/checkSongs');

// Sample data (you would replace this with actual data from your database)
const songs = [
  {id: 1, name: 'U2', artist: 'With or Without You', album: 'The Joshua Tree', title: 'With or Without You', is_favorite: true},
  {id: 2, name: 'Nirvana', artist: 'Smells Like Teen Spirit', album: 'Nevermind', title: 'Smells Like Teen Spirit', is_favorite: false},
];

// GET all songs
router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// GET a specific song by ID
router.get("/:id", async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const oneSong = await getOneSong(requestedId);
  if (oneSong[0]) {
    res.status(200).json(oneSong);
  } else {
    res.status(404).json({ error: "song not found" });
  }
});

// POST a new song
router.post('/',checkName, checkArtist, checkAlbum, checkTitle, checkFavorite, async (req, res) => {
  try {
    const { name, artist, album, title, is_favorite } = req.body;

    if (!name || !artist) {
      return res.status(400).json({ error: 'Name and artist are required fields' });
    }

    if (typeof is_favorite !== 'boolean') {
      return res.status(400).json({ error: 'is_favorite must be a boolean value' });
    }
    const createdSong = await createSong({ name, artist, album, title, is_favorite });
    const songs = await getAllSongs();

    const newId = songs[songs.length - 1].id + 1;

    const newSong = { id: newId, name, artist, album, title, is_favorite };

    songs.push(newSong);

    res.status(201).json(newSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT (update) a song by ID
router.put('/:id', async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const updatedSong = await updateSong(requestedId, req.body);

  const songIndex = songs.findIndex(song => song.id === requestedId);

  if (songIndex === -1) {
    return res.status(404).json({ error: 'Song not found' });
  }

  const { name, artist, album, title, is_favorite } = req.body;

  if (!name || !artist) {
    return res.status(400).json({ error: 'Name and artist are required fields' });
  }

  if (typeof is_favorite !== 'boolean') {
    return res.status(400).json({ error: 'is_favorite must be a boolean value' });
  }

  songs[songIndex] = { ...songs[songIndex], name, artist, album, title, is_favorite };

  res.json(songs[songIndex]);
});

// DELETE a song by ID
router.delete('/:id', async (req, res) => {
  const requestedId = parseInt(req.params.id);
  const deletedSong = await deleteSong(requestedId);

  const songIndex = songs.findIndex(song => song.id === requestedId);
  if (songIndex === -1) {
    return res.status(404).json({ error: 'Song not found' });
  }
  songs.splice(songIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
