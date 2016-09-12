
/*
+Architecture create by Tics Ingeniería
++Software health 
*/

//include external module
var http = require("http");
var fs = require('fs');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var restful = require('sequelize-restful'); // it is not using y now
var path = require("path");

//variable for configuration
var port = 80;
//express configuration
app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//cross domain
var listdomain = {
    "http://localhost": true,
    "http://192.168.100.254": true,
};
app.use(function (request, response, next) {
    if (request.headers.origin == undefined) {
        response.header("Access-Control-Allow-Origin", "*");
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
    response.send('Rest API create by < J Tecnolgía >');
});
//view 
//app.get('/view', function (request, response) {
  //  response.sendFile(path.join(__dirname + '/public/index.html'));
//});

////////////////////////////////

//////Modules/////

////Routers
var user = require("./Modules/Segurity/userRouter.js")
app.use("/api",user);

var person = require("./Modules/Segurity/personRouter.js")
app.use("/api",person);

var role = require("./Modules/Segurity/roleRouter.js")
app.use("/api",role);

var userrole = require("./Modules/Segurity/userroleRouter.js")
app.use("/api",userrole);

var version = require("./Modules/Configuration/versionRouter.js")
app.use("/api",version);

var methodology = require("./Modules/Configuration/methodologyRouter.js")
app.use("/api",methodology);



/*var bed = require("./modules/HospitalizationEvents/hebedRouter.js");
app.use("/api", bed);
var hopitalization = require("./modules/HospitalizationEvents/hehospitalizationRouter.js");
app.use("/api", hopitalization);
var event = require("./modules/HospitalizationEvents/heeventsRouter.js");
app.use("/api", event);
var room = require("./modules/HospitalizationEvents/heroomRouter.js");
app.use("/api", room);*/



///////////////////////////////////////////////////////////


http.createServer(app).listen(app.get('port'), function(){
  console.log("TicSalud Server working in  " + port);
});

