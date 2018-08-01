const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rental_hosts',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to mysql');
  } else {
    console.log('connected to my sql');
  }
});

module.exports = connection;
