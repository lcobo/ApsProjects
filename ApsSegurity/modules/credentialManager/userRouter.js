var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/user', function (req, res) {
    models.user.findAll({ limit: 10 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/user', function (req, res) {
    models.user.create({ usame: req.body.usame, usstatus: 1, uspassword: req.body.upassword, utenant:req.body.utenant })
   .then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});


module.exports = router;
