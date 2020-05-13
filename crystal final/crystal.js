var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
//route - callback - when that happens
//call the function that is declared


app.get('/personalcrystal', function(req,res){
    var data = req.query.data;
    database.push(data);
  
    var objecttopass = {messages: database};
    res.render("crystal.html",objecttopass);

});

app.get('/crystal', function(req,res){
    var data = req.query.data;

});

app.get('/allcrystals', function(req,res){
    var data = req.query.data;

});



app.listen(80, function () {
    console.log('Example app listening on port 80!')
  });