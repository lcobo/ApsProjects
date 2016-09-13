var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/subdimension', function (req, res) {
    models.subdimension.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/subdimension/id/:suoid', function (req, res) {
    models.subdimension.findAll({ 
        where: {
            suoid: req.params.suoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/subdimension/fk/:dioid', function (req, res) {
    models.subdimension.findAll({ 
        where: {
            dioid: req.params.dioid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/subdimension/nam/:name', function (req, res) {
    models.subdimension.findAll({ 
        where: { suname: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/subdimension', function (req, res) {
    models.subdimension.create({ suoid: req.body.suoid, suname: req.body.suname, dioid: req.body.dioid })
   .then(function (subdimension) {
       publicResource.ReturnResult(res, subdimension);
   })
});

router.put('/sys/subdimension/:suoid', function (req, res) {
    models.subdimension.update({ suname: req.body.suname, dioid: req.body.dioid  },
    { 
        where: {
             suoid: req.params.suoid 
            }
        }).then(function (subdimension) {
       publicResource.ReturnResult(res, subdimension);
   })
});

router.delete('/sys/subdimension/:suoid', function (req, res) {
    models.subdimension.destroy({ where: { suoid: req.params.suoid }})
    .then(function (subdimension) {
       publicResource.ReturnResult(res, subdimension);
   })
});
router.p
module.exports = router;
