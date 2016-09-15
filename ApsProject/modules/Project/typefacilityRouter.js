var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/typefacility', function (req, res) {
    models.typefacility.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/typefacility/id/:tfoid', function (req, res) {
    models.typefacility.findAll({ 
        where: {
            tfoid: req.params.tfoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/question/nam/:name', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{tfname: {$like: '%'+req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/typefacility', function (req, res) {
    models.typefacility.create({ tfoid: req.body.tfoid, tfname: req.body.tfname })
   .then(function (typefacility) {
       publicResource.ReturnResult(res, typefacility);
   })
});

router.put('/sys/typefacility/:tfoid', function (req, res) {
    models.typefacility.update({ tfname: req.body.tfname },
    { 
        where: {
             tfoid: req.params.tfoid 
            }
        }).then(function (typefacility) {
       publicResource.ReturnResult(res, typefacility);
   })
});

router.delete('/sys/typefacility/:tfoid', function (req, res) {
    models.typefacility.destroy({ where: { tfoid: req.params.tfoid }})
    .then(function (typefacility) {
       publicResource.ReturnResult(res, typefacility);
   })
});
router.p
module.exports = router;
