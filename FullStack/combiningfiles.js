var fs = require("fs");

console.log("program started");
var data = fs.readFileSync('example.txt');
var data1 = fs.readFileSync('example2.txt');
var stringToAppend = "\nI wrote this\n";


fs.writeFile("combined.txt", stringToAppend + data + data1 + stringToAppend, (err) => {
    if (err)
    console.log(err);
    else{
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("combined.txt", "utf8"));
    }
});



