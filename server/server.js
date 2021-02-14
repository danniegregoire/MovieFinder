/*
 *  Movie Finder API Server 
 */

const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Environment Variables
const PORT = process.env.MFA_PORT || 3080;
const OMDB_KEY = process.env.MFA_OMDB_KEY;
const OMDB_URL = 'https://www.omdbapi.com';

if(!OMDB_KEY){
  console.warn("Could not find MFA_OMDB_KEY environment variable.");
  console.warn("Please provide a Open Movie Database Key");
  console.log("Exiting.\n");
  process.exit(1);
}

app.use(cors());

// Search for movies by title
app.get("/movies/search",async (req, res) => {
  try{
    let topResult = {};

    if(req.query.title){
      let title = encodeURIComponent(req.query.title);
      resp = await axios.get(`${OMDB_URL}/?s=${title}&r=json&apikey=${OMDB_KEY}`);
      topResult = resp.data.Search[0] || {};
      console.log(topResult);
    }

    console.log(`Searched for "${req.query.title}" -> found "${topResult.Title}"`);
    res.send(topResult);

  } catch(err) {
    res.send({});
    console.warn(`Problem searching for "${req.query.title}"`)
    console.warn(err);
  }
});

// Fetch movie by IMDB id
app.get("/movie/:id", async (req, res) => {
  try{
    let movie = {};

    if(req.params.id){
      let id = encodeURIComponent(req.params.id);
      resp = await axios.get(`${OMDB_URL}/?i=${id}&r=json&apikey=${OMDB_KEY}`);
      console.log('RESP: '+ resp)
      movie = resp.data || {};
    }

    console.log(`Fetched movie by id: ${req.params.id} -> found "${movie.Title}"`);
    res.send(movie);

  } catch(err) {
    console.warn(`Problem fetching movie by id: ${req.params.id}`)
    console.warn(err);
    res.send({});
  }
});

// Fetch movie by title
app.get("/movie/byTitle", async (req, res) => {
  try{
    let movie = {};

    if(req.query.title){
      let title = encodeURIComponent(req.query.title);
      resp = await axios.get(`${OMDB_URL}/?t=${title}&r=json&apikey=${OMDB_KEY}`);
      movie = resp.data || {};
    }

    console.log(`Fetched movie by title: "${req.query.title}" -> found "${movie.Title}"`);
    res.send(topResult);

  } catch(err) {
    res.send({});
    console.warn(`Problem fetching movie by title: "${req.query.title}"`)
    console.warn(err);
  }
});


app.listen(PORT, () => {
  console.log(`Movie Finder API Server started on port ${PORT}`);
})