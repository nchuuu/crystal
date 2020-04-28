var Datastore = require('nedb');
var db = new Datastore({filename: "data.db", autoload: true});


var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
//route - callback - when that happens
//call the function that is declared

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

var count = 0;
app.get('/', handleRequest);
function handleRequest (req, res) {
  count++;
  res.send('Hello World! Refresh me. -nina' + count);
}

app.get('/ninachu', function(req, res) {
  res.send("You found my secret page");
})
var database = [];

app.get('/nameastar', function(req, res) {
  var data = req.query.data;
  database.push(data);

  var objecttopass = {messages: database};
  res.render("sampleview.ejs",objecttopass);

});

app.get('/nyc', function(req,res){
  var data = req.query.data;
  // nyc networked media hw 1 (basic html and css)
})

app.get('/phineas', function(req,res){
  var data = req.query.data;
})

var database = [];

app.get('/shawn', function(req,res) {
  var data = req.query.data;
 
  //var response = "<html><body><b>Shawn's Messages</b><br />"
  //database.push(data);
  //for (var i = 0; i < database.length; i++){
    //response += data[i] + "<br />";
 // }
 // response += "</body></html>";
 // res.send("hi");


});

app.get('/spacehome', function(req,res){
  var data = req.query.data;

  window.alert("fullscreen for full experience!");
  alert("fullscreen for full experience!");
 
});

app.get('/sun', function(req,res){
    var data = req.query.data;
  });

  app.get('/mercury', function(req,res){
    var data = req.query.data;
  });
  app.get('/venus', function(req,res){
    var data = req.query.data;
  });
  app.get('/earth', function(req,res){
    var data = req.query.data;
  });
  app.get('/mars', function(req,res){
    var data = req.query.data;
  });
  app.get('/jupiter', function(req,res){
    var data = req.query.data;
  });
  app.get('/saturn', function(req,res){
    var data = req.query.data;
  });
  app.get('/uranus', function(req,res){
    var data = req.query.data;
  });
  app.get('/neptune', function(req,res){
    var data = req.query.data;
  });

//database p5 project

app.get('/', function (req, res) {
    res.redirect("/planet.html");

});

var alldatas = [];
app.post('/submit', function (req,res) {

    var data = {
      planet: req.body.planet,
    };
   // alldatas.push(data);

   console.log(data.planet);
 
    db.insert(data, function (err, newDocs){
      console.log("err: " + err);
      console.log("newDocs: " + newDocs);

    });

    //res.render('planet.ejs')
    res.send("thanks");

  });

  app.get('/display', function(req, res) {
    db.find({}, function(err, docs) {
      console.log(docs);
      //res.send(docs);

      for (var i = 0; i < docs.length; i++){

      }

      var datatopass = {data:docs};
      res.render("planet.ejs",datatopass);
    });
  });

app.get('/data', function(req,res) {
  
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
});