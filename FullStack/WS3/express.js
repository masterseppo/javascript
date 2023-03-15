var express = require('express');
var fs = require('fs');
var app = express();

//Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/list', function (req, res) {
    res.sendFile(__dirname + '/exampledata.txt');
});

app.get('/jsondata', function (req, res) {
    var data = require('./exampledata2.json');
    var results = '<table border = "1">';

    for (var i = 0; i < data.length; i++) {
        results +=
        '<tr>' +
        '<td>' + data[i].Name + '</td>' +
        '<td>' + data[i].Email + '</td>' + 
        '</tr>';
    }
    res.send(results);
})

app.get('/add', function (req, res) {
    //load the existing data from the file
    var data = require('./exampledata2.json');

    //Create a new JSON object and add it to the existing data variable
    data.push({
        "Name": req.body.name,
        "Company": req.company.name,
        "Email": req.email.name,
        "Date": new Date()
    });
    //Convert the JSON object to a string format
    var jsonStr = JSON.stringify(data);
    //Write data to the file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('It is saved!!');
    });
    res.send('Saved the data to the file. Check the /json!!');
});

app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + '/adduser.html');
});

app.post('/adduser', function(req, res) {
    //load the existing data from the file
    var data = require('./exampledata2.json');

    //Create a new JSON object and add it to the existing data variable
    data.push({
        "Name": req.body.name,
        "Company": req.body.compay,
        "Email": req.body.email,
        "Date": new Date()
    });
    //Convert the JSON object to a string format
    var jsonStr = JSON.stringify(data);
    //Write data to the file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if (err) throw err;
        console.log('It is saved!!');
    });
    res.send('Saved the data to the file. Check the /json!!');
});

app.get('/*', function (req, res) {
    res.send('cant find requested page!!', 404);
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!!!');
});