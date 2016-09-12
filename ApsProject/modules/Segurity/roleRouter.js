var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/role', function (req, res) {
    models.role.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/role/id/:rooid', function (req, res) {
    models.role.findAll({ 
        where: {
            rooid: req.params.rooid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/role/des/:des', function (req, res) {
    models.role.findAll({ 
        where: { $or: [{rodescription: {$like: '%'+req.params.des+'%'}}, {roinitials: {like: '%'+ req.params.des+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/role', function (req, res) {
    models.role.create({ rooid: req.body.rooid, rodescription: req.body.rodescription, roinitials: req.body.roinitials})
   .then(function (role) {
       publicResource.ReturnResult(res, role);
   })
});

router.put('/sys/role/:rooid', function (req, res) {
    models.role.update({ rodescription: req.body.rodescription, roinitials: req.body.roinitials },
    { 
        where: {
             rooid: req.params.rooid 
            }
        }).then(function (role) {
       publicResource.ReturnResult(res, role);
   })
});

router.delete('/sys/role/:rooid', function (req, res) {
    models.role.destroy({ where: { rooid: req.params.rooid }})
    .then(function (role) {
       publicResource.ReturnResult(res, role);
   })
});
router.p
module.exports = router;
