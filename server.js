var app = require('express')();
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/img/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.get('/font-awesome-4.2.0/*', function(req, res){
  res.sendFile(__dirname+req.url);
});

app.get('/fonts/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.get('/js/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.get('/css/*', function(req, res){
  res.sendFile(__dirname + req.url);
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });

app.get('/main.css', function(req, res) {
    res.sendFile(__dirname + '/main.css');
});

app.get('/images/*', function(req, res)
{
  res.sendFile(__dirname + req.url);
});

app.get('emails.txt', function(req, res)
{
  res.sendFile(__dirname + '/emails.txt');
});

app.get('/signup.html', function(req, res){
  console.log("hello");
    res.sendFile(__dirname + '/signup.html');
});

app.get('/invite.html', function(req, res){
    res.sendFile(__dirname + '/invite.html');
});

http.listen(process.env.PORT || 8000, function() {
    console.log('listening on ' + process.env.PORT || 8000);
});

app.post('/sign-up', function(req, res){
  console.log("omg");
  console.log(req.body);
  var email = req.body.email;
  fs.writeFile(email + '.txt', email +"\r\n", (err)=>{
    if (err)
    {
      console.log(err);
      res.sendStatus(500);

    }
    console.log(email + " signed up.");
    res.sendStatus(200);

  });
});


