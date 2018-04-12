var express = require("express");
var bodyParser = require("body-parser");
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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
