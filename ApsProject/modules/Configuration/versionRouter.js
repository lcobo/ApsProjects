var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/version', function (req, res) {
    models.version.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/version/id/:veoid', function (req, res) {
    models.version.findAll({ 
        where: {
            veoid: req.params.veoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/version', function (req, res) {
    models.version.create({ veoid: req.body.veoid, venumber: req.body.venumber})
   .then(function (version) {
       publicResource.ReturnResult(res, version);
   })
});

router.put('/sys/version/:veoid', function (req, res) {
    models.version.update({ venumber: req.body.venumber },
    { 
        where: {
             veoid: req.params.veoid 
            }
        }).then(function (version) {
       publicResource.ReturnResult(res, version);
   })
});

router.delete('/sys/version/:veoid', function (req, res) {
    models.version.destroy({ where: { veoid: req.params.veoid }})
    .then(function (version) {
       publicResource.ReturnResult(res, version);
   })
});
router.p
module.exports = router;
