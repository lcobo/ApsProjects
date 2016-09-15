var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/responsevalue', function (req, res) {
    models.responsevalue.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/id/:rvoid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            rvoid: req.params.rvoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/nam/:name', function (req, res) {
    models.responsevalue.findAll({ 
        where: { vaname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/fk/:vaoid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            vaoid: req.params.vaoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/responsevalue/us/:usoid', function (req, res) {
    models.responsevalue.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/responsevalue', function (req, res) {
    models.responsevalue.create({ rvoid: req.body.rvoid, vaoid: req.body.vaoid, rvvalue: req.body.rvvalue, rvdate: req.body.rvdate, usoid:req.body.usoid })
   .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.put('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.update({ vaoid: req.body.vaoid, rvvalue: req.body.rvvalue, rvdate: req.body.rvdate, usoid:req.body.usoid },
    { 
        where: {
             rvoid: req.params.rvoid 
            }
        }).then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});

router.delete('/sys/responsevalue/:rvoid', function (req, res) {
    models.responsevalue.destroy({ where: { rvoid: req.params.rvoid }})
    .then(function (responsevalue) {
       publicResource.ReturnResult(res, responsevalue);
   })
});
router.p
module.exports = router;
