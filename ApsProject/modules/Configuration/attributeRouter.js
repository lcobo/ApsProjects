var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/attribute', function (req, res) {
    models.attribute.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/attribute/id/:atoid', function (req, res) {
    models.attribute.findAll({ 
        where: {
            atoid: req.params.atoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/attribute/nam/:name', function (req, res) {
    models.attribute.findAll({ 
        where: { atname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/attribute/fk/:sfoid', function (req, res) {
    models.attribute.findAll({ 
        where: {
            sfoid: req.params.sfoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/attribute', function (req, res) {
    models.attribute.create({ atoid: req.body.atoid, atname: req.body.atname ,sfoid: req.body.sfoid})
   .then(function (attribute) {
       publicResource.ReturnResult(res, attribute);
   })
});

router.put('/sys/attribute/:atoid', function (req, res) {
    models.attribute.update({ atname: req.body.atname ,sfoid: req.body.sfoid  },
    { 
        where: {
             atoid: req.params.atoid 
            }
        }).then(function (attribute) {
       publicResource.ReturnResult(res, attribute);
   })
});

router.delete('/sys/attribute/:atoid', function (req, res) {
    models.attribute.destroy({ where: { atoid: req.params.atoid }})
    .then(function (attribute) {
       publicResource.ReturnResult(res, attribute);
   })
});
router.p
module.exports = router;
