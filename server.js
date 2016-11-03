// Node.js notation for importing packages
var express = require('express');
var path = require('path');

// Spin up a server
var app = express();


// Serve static files from the /client/ directory
// app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(__dirname));


// Send 'Hello World' to the main page


app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('/view1', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('/view2', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.get('/view3', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

// Tell the app to listen for requests on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


  //res.render("index.html");

// add polymer.json where root == public
// add .bowerrc
// send all routes to index.html
// correspondence between client and server 
// highlight absolute urls to bower_components 