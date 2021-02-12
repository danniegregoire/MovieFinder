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

app.get("/search",async (req, res) => {
  try{
    let topResult = {};

    if(req.query.title){
      let title = encodeURIComponent(req.query.title);
      resp = await axios.get(`${OMDB_URL}/?s=${title}&apikey=${OMDB_KEY}`);
      topResult = resp.data.Search[0] || {};
    }
    console.log(`Searched for "${req.query.title}" - found "${topResult.Title}"`);

    res.send(topResult);
  } catch(err) {
    res.send({});
    console.warn(`Problem fetching results`)
    console.warn(err);
  }
});
app.listen(PORT, () => {
  console.log(`Movie Finder API Server started on port ${PORT}`);
})