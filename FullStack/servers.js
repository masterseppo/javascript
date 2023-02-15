var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/json'});

    var data = require("./persons.json");
    var output = JSON.stringify(data);
    response.write(output);

    response.end();
}).listen(8081);