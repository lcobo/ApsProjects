var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/dimension', function (req, res) {
    models.dimension.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/dimension/id/:dioid', function (req, res) {
    models.dimension.findAll({ 
        where: {
            dioid: req.params.dioid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/dimension/nam/:name', function (req, res) {
    models.dimension.findAll({ 
        where: { diname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/dimension', function (req, res) {
    models.dimension.create({ dioid: req.body.dioid, diname: req.body.diname })
   .then(function (dimension) {
       publicResource.ReturnResult(res, dimension);
   })
});

router.put('/sys/dimension/:dioid', function (req, res) {
    models.dimension.update({ diname: req.body.diname  },
    { 
        where: {
             dioid: req.params.dioid 
            }
        }).then(function (dimension) {
       publicResource.ReturnResult(res, dimension);
   })
});

router.delete('/sys/dimension/:dioid', function (req, res) {
    models.dimension.destroy({ where: { dioid: req.params.dioid }})
    .then(function (dimension) {
       publicResource.ReturnResult(res, dimension);
   })
});
router.p
module.exports = router;
