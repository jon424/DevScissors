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


// if(process.env.NODE_ENV === "production") {
//   //server static content//
//   //did npm run build in client
//   app.use(express.static(path.join(__dirname, "client/build")));
// }

// console.log('dirname', __dirname);
// console.log(path.join(__dirname, "client/build"));

//routes

//get all episodes
app.get('/api/topics', async (req, res) => {
  try {
    const allTopics = await pool.query("SELECT * FROM card ORDER BY id ASC");
    res.json(allTopics.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//select one topic
app.get('/api/topics/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const topic = await pool.query(
      "SELECT * FROM card WHERE id = $1", [
      id
    ]);

    res.json(topic.rows[0])
  } catch (err) {
    console.error(err.message)
  }
});

// app.get('/api/episode/:id/playlist', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const episodeContent = await pool.query(
//       "SELECT * FROM playlist WHERE episode = $1", [
//       id
//     ]);

//     res.json(episodeContent.rows)
//   } catch (err) {
//     console.error(err.message)
//   }
// });

app.post("/api/topic", async (req, res) => {
  try {
    const { card_title, card_subtitle, card_gif, card_snippets_count, card_link } = req.body;
    const newCard = await pool.query(
      "INSERT INTO card (card_title, card_subtitle, card_gif, card_link) VALUES ($1, $2, $3, $4) RETURNING *", [
        card_title,
        card_subtitle,
        card_gif,
        card_link
      ]
    );
    res.json(newCard.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
});


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`server has started on http://localhost:${PORT}`);
});