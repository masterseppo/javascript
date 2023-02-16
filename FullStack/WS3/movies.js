var axios = require('axios');
var http = require("http");

var server = http.createServer(function(request, response) {
    // Make the API request when the server receives a request
    axios.get("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(function(apiResponse) {
            // Get the response data and write it to the HTTP response
            var data = apiResponse.data;
            console.log(data); // log the response data to the console
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(data));
            response.end();
        })
        .catch(function(error) {
            console.error(error);
            response.writeHead(500);
            response.end("An error occurred");
        });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running at http://localhost:%d',port);