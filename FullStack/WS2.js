var fs = require("fs");

console.log("Program started");
var data = fs.readFile('example.txt');
console.log(data.toString());

for(i=0; i<15; i++){
    console.log("Node just keeps on going")
} 
console.log("Program ended");