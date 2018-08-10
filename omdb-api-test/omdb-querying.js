// dependency to make http calls
const request = require('request');

// set args to node arguments
let args = process.argv;

// bind movieTitle to second arg
let movieTitle = args[2];

// loop to create movie title this more than one word
for (let i = 3; i < args.length; i++) {

  movieTitle += "+" + args[i];

}

console.log(movieTitle);

request('http://www.omdbapi.com/?apikey=854012e7&t=' + movieTitle, (err, response, body) => {

  if (err) throw err;

  // logs body
  console.log(JSON.parse(body));

});
