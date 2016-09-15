var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/facility', function (req, res) {
    models.facility.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/facility/id/:faoid', function (req, res) {
    models.facility.findAll({ 
        where: {
            faoid: req.params.faoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/facility/fk/:tfoid', function (req, res) {
    models.facility.findAll({ 
        where: {
            tfoid: req.params.tfoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/facility/nam/:name', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{faname: {$like: '%'+req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/facility', function (req, res) {
    models.facility.create({ faoid: req.body.faoid, tfoid: req.body.tfoid, faname: req.body.faname })
   .then(function (facility) {
       publicResource.ReturnResult(res, facility);
   })
});

router.put('/sys/facility/:faoid', function (req, res) {
    models.facility.update({ tfoid: req.body.tfoid, rooid: req.body.rooid },
    { 
        where: {
             faoid: req.params.faoid 
            }
        }).then(function (facility) {
       publicResource.ReturnResult(res, facility);
   })
});

router.delete('/sys/facility/:faoid', function (req, res) {
    models.facility.destroy({ where: { faoid: req.params.faoid }})
    .then(function (facility) {
       publicResource.ReturnResult(res, facility);
   })
});
router.p
module.exports = router;
