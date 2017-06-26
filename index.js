/**
 * Created by bhanu.mokkala on 6/19/2017.
 */

var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var fetch = require("node-fetch");
var app = express();

//app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use(express.static(__dirname + '/public'));

// Set port
port = process.env.PORT || 2100;

app.listen(port);