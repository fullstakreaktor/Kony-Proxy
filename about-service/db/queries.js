const connection = require('./connection.js');

const selectHostInfo = (id, callback) => {
  const theQuery = `select * from hosts where id = ${id}`;
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const reviewsForHost = (id, callback) => {
  const theQuery = `select * from reviews where user_id = ${id}`;
  connection.query(theQuery, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.length);
    }
  });
};

const neighborhoodInfo = (id, callback) => {
  const theQuery = `select * from listings where id = ${id}`;
  connection.query(theQuery, (err, result)=> {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {
  selectHostInfo, reviewsForHost, neighborhoodInfo,
};

// selectHostInfo();
// reviewsForHost((err, result) => {
//   console.log(result.length);
// });

// neighborhoodInfo(56, (err, result)=> {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
