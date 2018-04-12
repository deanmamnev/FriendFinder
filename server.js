var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     // database: ""
// });


app.get('/', function(req, res) {
    res.send('I am listening');
  });




app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
