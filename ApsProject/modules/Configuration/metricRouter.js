var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/metric', function (req, res) {
    models.metric.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/metric/id/:meoid', function (req, res) {
    models.metric.findAll({ 
        where: {
            meoid: req.params.meoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/metric/nam/:name', function (req, res) {
    models.metric.findAll({ 
        where: { mename: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/metric/fk/:atoid', function (req, res) {
    models.metric.findAll({ 
        where: {
            atoid: req.params.atoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/metric', function (req, res) {
    models.metric.create({ meoid: req.body.meoid, atoid: req.body.atoid , mename: req.body.mename, meformula: req.body.meformula, mevaluemax: req.body.mevaluemax, mevaluemin: req.body.mevaluemin, melinebasevalref: req.body.melinebasevalref,metipeindicador: req.body.metipeindicador })
   .then(function (metric) {
       publicResource.ReturnResult(res, metric);
   })
});

router.put('/sys/metric/:meoid', function (req, res) {
    models.metric.update({ atoid: req.body.atoid , mename: req.body.mename, meformula: req.body.meformula, mevaluemax: req.body.mevaluemax, mevaluemin: req.body.mevaluemin, melinebasevalref: req.body.melinebasevalref,metipeindicador: req.body.metipeindicador  },
    { 
        where: {
             meoid: req.params.meoid 
            }
        }).then(function (metric) {
       publicResource.ReturnResult(res, metric);
   })
});

router.delete('/sys/metric/:meoid', function (req, res) {
    models.metric.destroy({ where: { meoid: req.params.meoid }})
    .then(function (metric) {
       publicResource.ReturnResult(res, metric);
   })
});
router.p
module.exports = router;
