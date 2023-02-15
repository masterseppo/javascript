var https = require("https")

var options = {
    hostname: 'www.omdbapi.com',
    path: '/?s=star+wars&apikey=cbbc6750',
};

const req = https.request(options, res=>{
    console.log('statusCode:' + res.statusCode)
    var data = '';
    res.on('data', chunk =>{
        data += chunk;
        process.stdout.write(chunk);
    });

    res.on('end', function(){
        jsData = JSON.parse(data);
        console.log(jsData);
    });

    
});

req.on('error', error =>{
    console.error(error);
});

req.end();