var http = require("http");
var server = http.createServer(function(request, response) {

    if(request.url === "/") {
        response.writeHead (200, {'Content-Type': 'text/plain'});
        response.end ('Hello from home page');
    }
    if(request.url === "/myblog"){
        response.writeHead (200, {'Content-Type': 'text/html'});
        response.write ('<h1> HHello Heading </h1>');
        response.write('mitähän vittua');
        response.write("<table border = 1> <tr> <th>juupas</th> <th>joopas</th> </tr> </table> ")
        response.write("<table border = 1> <tr> <th>juupas</th> <th>joopas</th> </tr> </table> ")
        response.end ('<h2> nyt saatana </h2>');

    }

})

var port = process.env.PORT || 3000; 
server.listen(port);
console.log("Server is running at http://localhost:%d" , port);