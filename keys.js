
console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.ozIlxBnDZOVNH2jX1qmlcyNbs,
  consumer_secret: process.env.BMLenRT9uNXsQAjT7mNPXlslbCsYOOBHOUnHeI96CUKqAYYU3p,
  access_token_key: process.env.1007338537828536320-do7QpLaz0deUIx4lLZq8VTYor8ryjw,
  access_token_secret: process.env.Q8tnDjyDw0COE0zSK75i5b28nNLJ3YweNa1AQjKvX9x01
};

exports.spotify = {
  id: process.env.54f973ea6c5b42548e83fa4db23f08c4,
  secret: process.env.3a30f884cb2442f48a5b63625e06d044
};

module.exports = {
  twitter: twitter,
  spotify: spotify
};

