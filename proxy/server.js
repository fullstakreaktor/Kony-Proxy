const express = require('express');
const path = require('path');
const app = express();

app.listen(3005, () => console.log("Listening to localhost:3005"));

app.use(express.static(path.join(__dirname, '/public')));

