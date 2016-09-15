var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/teamproject', function (req, res) {
    models.teamproject.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/teamproject/id/:tpoid', function (req, res) {
    models.teamproject.findAll({ 
        where: {
            tpoid: req.params.tpoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/teamproject/fk/:proid', function (req, res) {
    models.teamproject.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/teamproject', function (req, res) {
    models.teamproject.create({ tpoid: req.body.tpoid, proid: req.body.proid, usoidleader: req.body.usoidleader, usoidtech: req.body.usoidtech })
   .then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});

router.put('/sys/teamproject/:tpoid', function (req, res) {
    models.teamproject.update({ proid: req.body.proid, usoidleader: req.body.usoidleader, usoidtech: req.body.usoidtech },
    { 
        where: {
             tpoid: req.params.tpoid 
            }
        }).then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});

router.delete('/sys/teamproject/:tpoid', function (req, res) {
    models.teamproject.destroy({ where: { tpoid: req.params.tpoid }})
    .then(function (teamproject) {
       publicResource.ReturnResult(res, teamproject);
   })
});
router.p
module.exports = router;
