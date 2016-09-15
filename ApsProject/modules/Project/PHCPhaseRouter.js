var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/PHCPhase', function (req, res) {
    models.PHCPhase.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/PHCPhase/id/:phoid', function (req, res) {
    models.PHCPhase.findAll({ 
        where: {
            phoid: req.params.phoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/PHCPhase', function (req, res) {
    models.PHCPhase.create({ phoid: req.body.phoid, phaseid: req.body.phaseid, phdimension: req.body.phdimension, phdimension2: req.body.phdimension2, phdimension3: req.body.phdimension3 })
   .then(function (PHCPhase) {
       publicResource.ReturnResult(res, PHCPhase);
   })
});

router.put('/sys/PHCPhase/:phoid', function (req, res) {
    models.PHCPhase.update({ phaseid: req.body.phaseid, phdimension: req.body.phdimension, phdimension2: req.body.phdimension2, phdimension3: req.body.phdimension3 },
    { 
        where: {
             phoid: req.params.phoid 
            }
        }).then(function (PHCPhase) {
       publicResource.ReturnResult(res, PHCPhase);
   })
});

router.delete('/sys/PHCPhase/:phoid', function (req, res) {
    models.PHCPhase.destroy({ where: { phoid: req.params.phoid }})
    .then(function (PHCPhase) {
       publicResource.ReturnResult(res, PHCPhase);
   })
});
router.p
module.exports = router;
