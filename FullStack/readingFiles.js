var fs = require("fs");

console.log("Program started");
var data = fs.readFileSync('example.txt');
var data1 = fs.readFileSync('example2.txt');
console.log(data.toString());
console.log(data1.toString());

console.log("Program ended");

