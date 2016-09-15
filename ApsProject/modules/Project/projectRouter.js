var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/project', function (req, res) {
    models.project.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/project/id/:proid', function (req, res) {
    models.project.findAll({ 
        where: {
            proid: req.params.proid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/project/st/:prstatus', function (req, res) {
    models.project.findAll({ 
        where: {
            prstatus: req.params.prstatus }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.get('/sys/project/nam/:name', function (req, res) {
    models.question.findAll({ 
        where: { $or: [{prname: {$like: '%'+req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/project', function (req, res) {
    models.project.create({ proid: req.body.proid, prname: req.body.prname, prstatus: req.body.prstatus, prdateend: req.body.prdateend })
   .then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});

router.put('/sys/project/:proid', function (req, res) {
    models.project.update({  prname: req.body.prname, prstatus: req.body.prstatus, prdateend: req.body.prdateend  },
    { 
        where: {
             proid: req.params.proid 
            }
        }).then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});

router.delete('/sys/project/:proid', function (req, res) {
    models.project.destroy({ where: { proid: req.params.proid }})
    .then(function (project) {
       publicResource.ReturnResult(res, project);
   })
});
router.p
module.exports = router;
