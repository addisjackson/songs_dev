const express = require('express');
const cors = require("cors");
const app = express();
// CONTROLLERS
const songsController = require("./controllers/songsController.js");
const albumsController = require("./controllers/albumsController.js");

app.use(cors());
app.use(express.json());

app.use("/songs", songsController);
app.use("/albums", albumsController)

app.get('/', (req, res) => {
    res.send("welcome to Turner Songs")
});

//404
app.get("*", (req, res) => {
    res.status(404).send("page not found")
})

module.exports = app;
