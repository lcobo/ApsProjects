var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/feature', function (req, res) {
    models.feature.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/feature/id/:feoid', function (req, res) {
    models.feature.findAll({ 
        where: {
            feoid: req.params.feoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/feature/nam/:name', function (req, res) {
    models.feature.findAll({ 
        where: { fename: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/feature', function (req, res) {
    models.feature.create({ feoid: req.body.feoid, fename: req.body.fename })
   .then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});

router.put('/sys/feature/:feoid', function (req, res) {
    models.feature.update({ fename: req.body.fename  },
    { 
        where: {
             feoid: req.params.feoid 
            }
        }).then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});

router.delete('/sys/feature/:feoid', function (req, res) {
    models.feature.destroy({ where: { feoid: req.params.feoid }})
    .then(function (feature) {
       publicResource.ReturnResult(res, feature);
   })
});
router.p
module.exports = router;
