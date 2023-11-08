const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController"); // Assuming you have a songs route file
const albumsController = require("./controllers/albumsController"); // Assuming you have an albums route file

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/songs", songsController);
app.use("/albums", albumsController);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Tuner Songs!");
});

// 404 route
app.use((req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;
