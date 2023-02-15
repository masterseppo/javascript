const http = require("http");
const fs = require("fs");


const server = http.createServer(function(request, response) {
    if (request.url === "/") {
        fs.readFile("sampledata.json", "utf8", function(err, data) {
          if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 Not Found");
          } else {
            response.writeHead(200, { "Content-Type": "text/json" });
            response.end(data);
          }
        });
      }
    });

const port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d", port);

//console.log("original data");
//console.log(data);

//var newPerson = {"name" : "John Doe",
//"age" : "52", "company" : "Laurea", "address" : "Ratatie 22"};

//data.push(newPerson);
   // "_id": "011",
   // "age": "124",
    //"email": "ajoof@ti.fi"
//})

//console.log("added");
//console.log(data);

//delete data[6];

//console.log("deleted");
//console.log(data);