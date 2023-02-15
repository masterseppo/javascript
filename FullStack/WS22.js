var fs = require("fs");

console.log("Program started");

fs.readdir('../', function(err, data){;
if (err) return console.error(err);
console.log("results of fileread");
console.log(data.toString());
console.log(data);
});
