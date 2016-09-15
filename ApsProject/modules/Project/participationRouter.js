var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/participation', function (req, res) {
    models.participation.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/participation/id/:proid', function (req, res) {
    models.participation.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/participation/fkfaoid/:faoid', function (req, res) {
    models.participation.findAll({ 
        where: {
            faoid: req.params.faoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/participation/fkphoid/:phoid', function (req, res) {
    models.participation.findAll({ 
        where: {
            phoid: req.params.phoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/participation', function (req, res) {
    models.participation.create({ proid: req.body.proid, faoid: req.body.faoid, phoid: req.body.phoid })
   .then(function (participation) {
       publicResource.ReturnResult(res, participation);
   })
});

router.put('/sys/participation/:proid', function (req, res) {
    models.participation.update({ faoid: req.body.faoid, rooid: req.body.rooid },
    { 
        where: {
             proid: req.params.proid 
            }
        }).then(function (participation) {
       publicResource.ReturnResult(res, participation);
   })
});

router.delete('/sys/participation/:proid', function (req, res) {
    models.participation.destroy({ where: { proid: req.params.proid }})
    .then(function (participation) {
       publicResource.ReturnResult(res, participation);
   })
});
router.p
module.exports = router;
