var fs = require("fs");

console.log("Program started");

fs.readFile('example.txt', results);

for (var i=0; i < 15; i++) {
    console.log("node just keeps while file read");
}


function results(err, data){
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
}