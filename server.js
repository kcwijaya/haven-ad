var app = require('express')();
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });

app.get('/main.css', function(req, res) {
    res.sendFile(__dirname + '/main.css');
});



http.listen(process.env.PORT || 8000, function() {
    console.log('listening on ' + process.env.PORT || 8000);
});

