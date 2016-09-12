var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/userrole', function (req, res) {
    models.userrole.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/userrole/id/:uroid', function (req, res) {
    models.userrole.findAll({ 
        where: {
            uroid: req.params.uroid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/userrole/usoid/:usoid', function (req, res) {
    models.userrole.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/userrole/rooid/:rooid', function (req, res) {
    models.userrole.findAll({ 
        where: {
            rooid: req.params.rooid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});



router.post('/sys/userrole', function (req, res) {
    models.userrole.create({ uroid: req.body.uroid, usoid: req.body.usoid, rooid: req.body.rooid})
   .then(function (userrole) {
       publicResource.ReturnResult(res, userrole);
   })
});

router.put('/sys/userrole/:uroid', function (req, res) {
    models.userrole.update({ usoid: req.body.usoid, rooid: req.body.rooid },
    { 
        where: {
             uroid: req.params.uroid 
            }
        }).then(function (userrole) {
       publicResource.ReturnResult(res, userrole);
   })
});

router.delete('/sys/userrole/:uroid', function (req, res) {
    models.userrole.destroy({ where: { uroid: req.params.uroid }})
    .then(function (userrole) {
       publicResource.ReturnResult(res, userrole);
   })
});
router.delete('/sys/userrole/usoid/:usoid', function (req, res) {
    models.userrole.destroy({ where: { usoid: req.params.usoid }})
    .then(function (userrole) {
       publicResource.ReturnResult(res, userrole);
   })
});
router.p
module.exports = router;
