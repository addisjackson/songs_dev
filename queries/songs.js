const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
   const allSongs = await db.any("SELECT * FROM songs");
   return allSongs;
  } catch(err) {
    return err
  } 
}

const getSong = async (id) => {
    try {
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
        return oneSong;
    } catch (error) {
        return error;
    }
}

const createSong = async (song) => {
try {
    const newSong = await db.one(
        "INSERT INTO songs (name, artist, album, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *", [song.name, song.artist, song.album, song.is_favorite]
    );
    return newSong;
} catch (error) {
    return error;
}

}

const deleteSong = async (id) => {
try {
    const deletedSong = await db.one("DELETE FROM songs WHERE id = $1 RETURNING *", id)
    return deletedSong;

} catch (err) {
 return err
}

}

const updateSong = async (song, id) => {
const {name, artist, album, is_favorite} = song;

    // [song.name, song.artist, song.album, song.time, song.is_favorite ]
try {
    const updatedSong = await db.one("UPDATE songs SET name = $1, artist = $2, album = $3, is_favorite = $4 WHERE id = $5 RETURNING *", [name, artist, album, is_favorite, id]);
    return updatedSong;
} catch (err) {
    return err;
}
}



// we will have a bunch of exports
module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong }