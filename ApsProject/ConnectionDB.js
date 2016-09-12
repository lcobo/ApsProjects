"use strict";
module.exports = {
    open: function () {
        var Sequelize = require("sequelize");
        var env = process.env.NODE_ENV || "development";
        var config = require(__dirname + '/config/config.json')[env];
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
        return sequelize;
    }
}
