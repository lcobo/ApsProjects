var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/typequestion', function (req, res) {
    models.typequestion.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/typequestion/id/:tqoid', function (req, res) {
    models.typequestion.findAll({ 
        where: {
            tqoid: req.params.tqoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/typequestion/st/:tqstate', function (req, res) {
    models.typequestion.findAll({ 
        where: {
            tqstate: req.params.tqstate }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/typequestion/nam/:name', function (req, res) {
    models.typequestion.findAll({ 
        where: { tqdescription: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/typequestion', function (req, res) {
    models.typequestion.create({ tqoid: req.body.tqoid, tqdescription: req.body.tqdescription, tqstate: req.body.tqstate })
   .then(function (typequestion) {
       publicResource.ReturnResult(res, typequestion);
   })
});

router.put('/sys/typequestion/:tqoid', function (req, res) {
    models.typequestion.update({ tqdescription: req.body.tqdescription, tqstate: req.body.tqstate },
    { 
        where: {
             tqoid: req.params.tqoid 
            }
        }).then(function (typequestion) {
       publicResource.ReturnResult(res, typequestion);
   })
});

router.delete('/sys/typequestion/:tqoid', function (req, res) {
    models.typequestion.destroy({ where: { tqoid: req.params.tqoid }})
    .then(function (typequestion) {
       publicResource.ReturnResult(res, typequestion);
   })
});
router.p
module.exports = router;
