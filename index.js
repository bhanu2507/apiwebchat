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

app.post('/getkey', function (req, res) {
   // res.cookie('settings', req.body);
    res.redirect('/');
})

app.get('/getkey', function (req, res){
    var appSecret = 'emcQxQHdqlQ.cwA.EMw.gnW_aS8j108N38zNZY2y2ezuEI9LiOoVWHlujG25iDk';
    var endPoint = 'https://directline.botframework.com/v3/directline/tokens/generate';
    var auth = 'Bearer';

    fetch(endPoint, {
        method: 'POST',
        headers: { Authorization: auth + " " + appSecret, Accept: "application/json" }
    }).then(function (response) {
        return response.json();
    }).then(function (result) {
        var token = result["token"];
        res.json({ token: token });
    });

})

// Set port
port = process.env.PORT || 2100;

app.listen(port);