var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/rolesubdimension', function (req, res) {
    models.rolesubdimension.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/rolesubdimension/id/:rsoid', function (req, res) {
    models.rolesubdimension.findAll({ 
        where: {
            rsoid: req.params.rsoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/rolesubdimension/fk/:suoid', function (req, res) {
    models.rolesubdimension.findAll({ 
        where: {
            suoid: req.params.suoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/rolesubdimension/fkrooid/:rooid', function (req, res) {
    models.rolesubdimension.findAll({ 
        where: {
            rooid: req.params.rooid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/rolesubdimension', function (req, res) {
    models.rolesubdimension.create({ rsoid: req.body.rsoid, suoid: req.body.suoid, rooid: req.body.rooid })
   .then(function (rolesubdimension) {
       publicResource.ReturnResult(res, rolesubdimension);
   })
});

router.put('/sys/rolesubdimension/:rsoid', function (req, res) {
    models.rolesubdimension.update({ suoid: req.body.suoid, rooid: req.body.rooid },
    { 
        where: {
             rsoid: req.params.rsoid 
            }
        }).then(function (rolesubdimension) {
       publicResource.ReturnResult(res, rolesubdimension);
   })
});

router.delete('/sys/rolesubdimension/:rsoid', function (req, res) {
    models.rolesubdimension.destroy({ where: { rsoid: req.params.rsoid }})
    .then(function (rolesubdimension) {
       publicResource.ReturnResult(res, rolesubdimension);
   })
});
router.p
module.exports = router;
