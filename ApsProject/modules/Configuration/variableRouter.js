var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/variable', function (req, res) {
    models.variable.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/variable/id/:vaoid', function (req, res) {
    models.variable.findAll({ 
        where: {
            vaoid: req.params.vaoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/variable/nam/:name', function (req, res) {
    models.variable.findAll({ 
        where: { vaname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/variable/fk/:meoid', function (req, res) {
    models.variable.findAll({ 
        where: {
            meoid: req.params.meoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/variable', function (req, res) {
    models.variable.create({ vaoid: req.body.vaoid, meoid: req.body.meoid, vaname: req.body.vaname, vatypevalue: req.body.vatypevalue })
   .then(function (variable) {
       publicResource.ReturnResult(res, variable);
   })
});

router.put('/sys/variable/:vaoid', function (req, res) {
    models.variable.update({ meoid: req.body.meoid, vaname: req.body.vaname, vatypevalue: req.body.vatypevalue  },
    { 
        where: {
             vaoid: req.params.vaoid 
            }
        }).then(function (variable) {
       publicResource.ReturnResult(res, variable);
   })
});

router.delete('/sys/variable/:vaoid', function (req, res) {
    models.variable.destroy({ where: { vaoid: req.params.vaoid }})
    .then(function (variable) {
       publicResource.ReturnResult(res, variable);
   })
});
router.p
module.exports = router;
