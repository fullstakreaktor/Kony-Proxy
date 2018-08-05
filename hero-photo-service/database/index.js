const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: 'root',
  password: '',
  database: 'hero',

});

const db = mysql.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
  port: process.env.RDS_PORT|| 3306,
  database: 'reservation'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to mysql ', err);
  } else {
    console.log('Successful connection to mysql');
  }
});


module.exports = connection;
