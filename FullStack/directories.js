var fs = require("fs");

var dirPath = "./newdata";

fs.mkdir(dirPath, (err) => {
    if (err) throw err;
    console.log(`Directory ${dirPath} created successfully`);
  });