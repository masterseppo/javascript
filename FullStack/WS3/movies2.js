var axios = require("axios");
var http = require("http");

var server = http.createServer(function(request, response) {
    axios.get("http://www.omdbapi.com/?t=vanilla+sky&apikey=cbbc6750")
        .then(function(apiResponse){
            var data = apiResponse.data;
            var html = "<table><tr><th>Title</th><th>Year</th><th>Director</th></tr>";
            html += "<tr><td>" + data.Title + "</td><td>" + data.Year + "</td><td>" + data.Director + "</td></tr>";
            html += "<tr><img src='" + data.Poster + "'></tr>";
            html += "</table>";
            console.log(html); // log the HTML table to the console
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(html);
            response.end();
        })
        .catch(function(error){
            console.error(error);
            response.writeHead(500);
            response.end("An error has occured");
        });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);