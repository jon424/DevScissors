const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const path = require("path");

const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());

//disables caching, trying to clear the 304 response:
//app.disable('etag');

//app.use(express.static(path.join(__dirname, "client/build")));
//app.use(express.static("client/build"))


if(process.env.NODE_ENV === "production") {
  //server static content//
  //did npm run build in client
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log('dirname', __dirname);
console.log(path.join(__dirname, "client/build"));

//routes

//get all episodes
app.get('/api/episode', async (req, res) => {
  try {
    const allEpisodes = await pool.query("SELECT * FROM card ORDER BY id DESC");
    res.json(allEpisodes.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//select one episode
app.get('/api/episode/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const episodeContent = await pool.query(
      "SELECT * FROM card WHERE id = $1", [
      id
    ]);

    res.json(episodeContent.rows[0])
  } catch (err) {
    console.error(err.message)
  }
});

app.get('/api/episode/:id/playlist', async (req, res) => {
  try {
    const { id } = req.params;
    const episodeContent = await pool.query(
      "SELECT * FROM playlist WHERE episode = $1", [
      id
    ]);

    res.json(episodeContent.rows)
  } catch (err) {
    console.error(err.message)
  }
});

app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await pool.query(
      "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *", [
        name,
        email,
        message
      ]
    );
    res.json(newMessage.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server has started on http://localhost:${PORT}`);
});