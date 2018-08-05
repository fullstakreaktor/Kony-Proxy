const express = require('express');
const path = require('path');
const url = require('url');
const proxy = require('http-proxy-middleware');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3005;

const reservationProxy = proxy('/api/reservation', {
	target: 'http://35.163.43.209:80'
})

const heroProxy = proxy('/api/hero', {
	target: 'http://52.49.157.131:3000'
})

const reviewsProxy = proxy ('/api/reviews', {
	target: 'http://18.222.28.105:3002'
})

app.listen(PORT, () => console.log("Listening to port " + PORT));

app.use(express.static(path.join(__dirname, '/public')));
app.use(reservationProxy);
app.use(heroProxy);
app.use(reviewsProxy);

// app.get('/api/reservation', (req, res) => {
// 	let reservationURL = 'http://35.163.43.209:80' + req.url;
// 	request(reservationURL).pipe(res);
// })

// app.get('/api/hero', (req, res) => {
// 	let heroURL = 'http://52.49.157.131:3000' + req.url;
// 	request(heroURL).pipe(res);
// })
