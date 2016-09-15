
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
var port = 6911;
//express configuration
app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

//cross domain
var listdomain = {
    "http://localhost": true,
    "http://192.168.100.190": true,
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

var method = require("./Modules/Configuration/methodRouter.js")
app.use("/api",method);

var typequestion = require("./Modules/Configuration/typequestionRouter.js")
app.use("/api",typequestion);

var optionquestion = require("./Modules/Configuration/optionquestionRouter.js")
app.use("/api",optionquestion);

var dimension = require("./Modules/Configuration/dimensionRouter.js")
app.use("/api",dimension);

var subdimension = require("./Modules/Configuration/subdimensionRouter.js")
app.use("/api",subdimension);

var feature = require("./Modules/Configuration/featureRouter.js")
app.use("/api",feature);

var question = require("./Modules/Configuration/questionRouter.js")
app.use("/api",question);

var subfeature = require("./Modules/Configuration/subfeatureRouter.js")
app.use("/api",subfeature);

var attribute = require("./Modules/Configuration/attributeRouter.js")
app.use("/api",attribute);

var metric = require("./Modules/Configuration/metricRouter.js")
app.use("/api",metric);

var variable = require("./Modules/Configuration/variableRouter.js")
app.use("/api",variable);

var responsevalue = require("./Modules/Configuration/responsevalueRouter.js")
app.use("/api",responsevalue);

var rolesubdimension = require("./Modules/Configuration/rolesubdimensionRouter.js")
app.use("/api",rolesubdimension);

var PHCPhase = require("./Modules/Project/PHCPhaseRouter.js")
app.use("/api",PHCPhase);

var typefacility = require("./Modules/Project/typefacilityRouter.js")
app.use("/api",typefacility);

var facility = require("./Modules/Project/facilityRouter.js")
app.use("/api",facility);

var participation = require("./Modules/Project/participationRouter.js")
app.use("/api",participation);

var teamproject = require("./Modules/Project/teamprojectRouter.js")
app.use("/api",teamproject);

var project = require("./Modules/Project/projectRouter.js")
app.use("/api",project);


///////////////////////////////////////////////////////////
http.createServer(app).listen(app.get('port'), function(){
  console.log("TicSalud Server working in  " + port);
});

