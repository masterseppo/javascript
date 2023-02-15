const http = require("http");
const fs = require("fs");

const server = http.createServer(function(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello from home page");
  }
  if (request.url === "/myblog") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1> HHello Heading </h1>");
    response.write("mitähän vittua");
    response.write(
      "<table border = 1> <tr> <th>juupas</th> <th>joopas</th> </tr> </table>"
    );
    response.write(
      "<table border = 1> <tr> <th>juupas</th> <th>joopas</th> </tr> </table>"
    );
    response.end("<h2> nyt saatana </h2>");
  }
  if (request.url === "/frontpage") {
    fs.readFile("frontpage.html", "utf8", function(err, data) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  }
  if (request.url === "/contact") {
    fs.readFile("contact.html", "utf8", function(err, data) {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 Not Found");
        }else{
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(data);
        }
    });
  }
  if (request.url === "/plaintext") {
    fs.readFile("example.txt", "utf8", function(err, data) {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 Not Found");
        }else{
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end(data);
        }
    });
  }
  if (request.url === "/json") {
    fs.readFile("sampledata.json", "utf8", function(err, data) {
        if (err) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 Not Found");
        }else{
            var data = JSON.parse(data);
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("<table border = 1>");
            for(var i=0; i < data.length; i++){
                response.write("<tr>");
                response.write("<td>" + data[i].name + "</td>");
                response.write("<td>" + data[i].age + "</td>");
                response.write("<td>" + data[i].company + "</td>");
                response.write("<td>" + data[i].address + "</td>");
                response.write("</tr>");
                }
                response.write("</table>");
                response.end();
        }
    });
  }
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d", port);