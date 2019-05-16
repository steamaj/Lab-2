const data = require('./top_2018_movies.json'); //including a module that is a file within your program
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
    var myParser = require("body-parser");
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})
 
app.listen(3000)


//Create a function that list all the movies 
app.get('/all_movies', function (req, res) {
  data.forEach(function(movie){
    var movieName = movie.movie + '\n';
    console.log(movieName);
    res.write(movieName);
  })
}) 
   
//Create a function that list the movies that grossed above 20 million and genre is action 

app.get('/action', function (req, res) {
   data.forEach(function(movieData){
    if(movieData.genre === "Action" && movieData.gross > 20000000){
      var movieName = movieData.movie + '\n';
      console.log(movieName);
      res.write(movieName);
    }
  })  
  res.end(); 
})

//Create a function that list the movies that are rated "PG-13" and number of tickets sold is between 1 and 5 million 
app.get('/pg', function (req, res) {
  data.forEach(function(movieData){
   if(movieData.mpaa === "PG-13" && movieData.tickets_sold > 1000000 && movieData.tickets_sold < 5000000){
     var movieName = movieData.movie + '\n';
     console.log(movieName);
     res.write(movieName);
   }
 })  
 res.end(); 
})
//Create a function that sort the movies based on "distributor" (+2 extra credit)
