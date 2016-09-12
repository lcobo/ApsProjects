"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "production";
var config    = require(__dirname + '/config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};


///include all Model that there exist in modules folder
console.log("....Loading Model File....");
function readModelFile(folder, pather) {
    if (pather.substring(1, 1) != ".") {
        var folderPath = "." + ((pather != ""?("/" + pather):"") + "/" + folder);
     }
    else {
        var folderPath = ((pather != ""?("/" + pather):"") + "/" + folder);
    }
    var folderRead = ((pather != ""?("/" + pather):"") + "/" + folder);   
    fs
  .readdirSync(folderPath)
  .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
  .forEach(function (file) {
        var modelFile = file.substr(file.length - 8);
        var extensionFile = file.substr(file.length - 3);
        if (modelFile == 'Model.js') {
            var model = sequelize.import(path.join(__dirname+"/"+ folderRead, file));
            db[model.name] = model;
            console.log("importing ... "+model.name);
            
        }
///Important in this folder only must have js file and nother folder, no put img file or another type of file
        else if (extensionFile != '.js') { 
          readModelFile(file, folderPath);
        }
    });
}

readModelFile('modules',"");


Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

///////////////////////////////////////////////////////////
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;