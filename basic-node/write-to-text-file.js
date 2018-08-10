// require fs package
const fs = require('fs');

// reads file line by line and does whatever is within function body
// readFile args are path, options, callback
fs.readFile("./test-file.txt", "utf-8", (err, data) => {

  if (err) throw err;

  console.log(data);

});

// writes to a whole new file, overwriting anything previously on file
fs.writeFile("./test-write-file.txt", "this should be on line 2", (err, data) => {

  if (err) throw err;

  console.log("test-write-file.txt has been created, written to, and saved");

});

// appends to end of a file rather than overwriting, \n is needed for newline
fs.appendFile("./test-append-file.txt", "\nthis should be line 3", (err, data) => {

  if (err) throw err;

  console.log("test-append-file.txt has been written to, and saved");

});
