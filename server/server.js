/*
 *  Movie Finder API Server 
 */

const express = require('express');
const axios = require('axios');
const app = express();

// Environment Variables
const PORT = process.env.MFA_PORT || 3080;
const OMDB_KEY = process.env.MFA_OMDB_KEY;
const OMDB_URL = 'https://www.omdbapi.com';

app.get("/search",async (req, res) => {
  try{
    let movieResult = {};
    let title = encodeURIComponent(req.query.title);

    if(title){
      resp = await axios.get(`${OMDB_URL}/?s=${title}&apikey=${OMDB_KEY}`);
      movieResult = resp.data.Search[0] || '{}';
    }
    console.log(`Searched for "${title}" - found "${movieResult.Title}"`);
    res.send(movieResult);
  }
  catch(err){
    res.send({});
    console.warn(`Problem fetching results`)
    console.warn(err);
  }
});
app.listen(PORT, () => {
  console.log(`Movie Finder API Server started on port ${PORT}`);
})