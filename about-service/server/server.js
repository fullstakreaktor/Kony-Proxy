const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/queries.js');
const PORT = process.env.PORT || 3001;
const app = express();

// to parse our data and use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/about/hosts/:id', (req, res) => {
  db.selectHostInfo(+req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/api/about/reviews/:listingId', (req, res) => {
  db.reviewsForHost(+req.params.listingId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.get('/api/about/neighborhood/:listingId', (req, res) => {
  db.neighborhoodInfo(+req.params.listingId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

app.listen(PORT, () => {
  console.log('Server started on ' + PORT);
});

