var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/auth/:username/:password', function (req, res) {
 
    
    models.user.hasMany(models.roleuser, { foreignKey: 'userid' });
    models.roleuser.hasMany(models.roledetail, { foreignKey: 'rid' });
    models.user.findAll({
        where: {
            uname: req.params.username,
            upassword: req.params.password
        },
        include: [{ model: models.roleuser, required: true }]
    }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });

});

module.exports = router;
