
/*
+Architecture create by Tics Ingeniería
++Software health 
*/

//include external module
var http = require("http");
//var https = require('https');
var fs = require('fs');
///configuración de certificados

var options = {
    key: fs.readFileSync('Cert/Weblocalhost.key'),
    cert: fs.readFileSync('Cert/Weblocalhost.crt')
};


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var restful = require('sequelize-restful'); // it is not using y now
var path = require("path");

//variable for configuration
var port = 7777;
//express configuration
app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//cross domain
var listdomain = {
    "http://localhost:7777": true,
    "http://localhost:5433": true,
    "http://localhost": true,
    "http://192.168.100.254": true
};
app.use(function (request, response, next) {
    if (request.headers.origin == undefined) {
        response.header("Access-Control-Allow-Origin", "http://192.168.100.254:7777");
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
    else {
        if (listdomain[request.headers.origin]) {
            response.header("Access-Control-Allow-Origin", request.headers.origin);
            response.header('Access-Control-Allow-Methods', 'GET');
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        }
        else {
            response.send(403, { access: "Client"+ request.headers.origin+"doesn't allow"});
        }
    }
   

});

//file public for wiew
app.use(express.static(path.join(__dirname, 'public')));
//root path
app.get('/', function (request, response) {
    response.send('Rest API create by < Tics Ingeniería S.A.S >');
});
//view 
app.get('/view', function (request, response) {
    response.sendFile(path.join(__dirname + '/public/index.html'));
});

////////////////////////////////

//////Modules/////

////authentication
var auth = require("./modules/credentialManager/authRouter.js");
app.use("/api", auth);

////user module
var user = require("./modules/credentialManager/userRouter.js");
app.use("/api", user);


///////////////////////////////////////////////////////////

//creation of the Server
//https.createServer(options, app).listen(app.get('port'), function () {
//    console.log("TicSalud Server working in  " + port);
//});

http.createServer(app).listen(app.get('port'), function(){
  console.log("TicSalud Server working in  " + port);
});

//https.createServer(options, function (req, res) {
//    res.writeHead(200);
//    res.end("¡Responidiendo por SSL!\n");
//}).listen(8000);
