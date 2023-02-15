const PORT = process.env.PORT || 3000;
var http = require("http");

//Create server object 
http 
    .createServer(function(request, response){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write('<figure><img src="https://www.muji.com/in/products/cmdty/detail/4547315915224#&gid=1&pid=1"></figure>');
        response.write("Source: https://www.muji.com");
        response.end("");
    })
    .listen(PORT);
