var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/method', function (req, res) {
    models.method.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/method/id/:id', function (req, res) {
    models.method.findAll({ 
        where: { mtoid: req.params.id}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/method/nam/:name', function (req, res) {
    models.method.findAll({ 
        where: { $or: [{mtname: {$like: '%'+req.params.name+'%'}},{mtdescription: {like: '%'+ req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/method/meoid/:meoid', function (req, res) {
    models.method.findAll({ 
        where: { meoid: req.params.meoid}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/method', function (req, res) {
    models.method.create({ mtoid: req.body.mtoid, mtname: req.body.mtname, mtdescription: req.body.mtdescription, meoid: req.body.meoid })
   .then(function (method) {
       publicResource.ReturnResult(res, method);
   })
});

router.put('/sys/method/:mtoid', function (req, res) {
  models.method.update({ mtname: req.body.mtname, mtdescription: req.body.mtdescription, meoid: req.body.meoid },
    { 
        where: {
             mtoid: req.params.mtoid 
            }
        }).then(function (method) {
       publicResource.ReturnResult(res, method);
   })
});

router.delete('/sys/method/:mtoid', function (req, res) {
    models.method.destroy({ where: { mtoid: req.params.mtoid }})
    .then(function (method) {
       publicResource.ReturnResult(res, method);
   })
});
router.p
module.exports = router;