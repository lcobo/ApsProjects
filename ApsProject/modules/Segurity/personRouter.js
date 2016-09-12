var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/person', function (req, res) {
    models.person.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/person/id/:id', function (req, res) {
    models.person.findAll({ 
        where: { $or: [{peoid: req.params.id}, {peidentify: req.params.id}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/person/nam/:name', function (req, res) {
    models.person.findAll({ 
        where: { $or: [{pename: {$like: '%'+req.params.name+'%'}}, {pesurname: {like: '%'+ req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/person', function (req, res) {
    models.person.create({ peoid: req.body.peoid, peidentify: req.body.peidentify, pename: req.body.pename, pesurname: req.body.pesurname, pestudies: req.body.pestudies, peprofdescription: req.body.peprofdescription,pemail: req.body.pemail,petelephon: req.body.petelephon })
   .then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});

router.put('/sys/person/:peoid', function (req, res) {
  models.person.update({ peidentify: req.body.peidentify, pename: req.body.pename, pesurname: req.body.pesurname, pestudies: req.body.pestudies, peprofdescription: req.body.peprofdescription,pemail: req.body.pemail,petelephon: req.body.petelephon },
    { 
        where: {
             peoid: req.params.peoid 
            }
        }).then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});

router.delete('/sys/person/:peoid', function (req, res) {
    models.person.destroy({ where: { peoid: req.params.peoid }})
    .then(function (person) {
       publicResource.ReturnResult(res, person);
   })
});
router.p
module.exports = router;