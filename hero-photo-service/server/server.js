const express = require('express');
const PORT = process.env.PORT || 3000;

const app = require('./app.js');

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to the port :', err);
  } else {
    console.log('Hero Photo server is listening on port ' + PORT);
  }
});
