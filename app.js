const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const dotenv = require('dotenv');

dotenv.config();

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/songs', async (req, res) => {
    try {
      const songs = await db.any('SELECT * FROM songs');
      res.json(songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.get('/', (req, res) => {
    res.send('Welcome to Tuner');
  });
  
  