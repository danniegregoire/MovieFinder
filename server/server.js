const express = require('express');

const app = express();

const PORT = 3080;


app.listen(PORT, () => {
  console.log(`Movie Finder API Server started on port ${PORT}`);
})