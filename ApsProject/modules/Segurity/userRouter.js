var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/user', function (req, res) {
    models.user.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/user/id/:usoid', function (req, res) {
    models.user.findAll({ 
        where: {
            usoid: req.params.usoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/user/st/:usstatus', function (req, res) {
    models.user.findAll({ 
        where: {
            usstatus: req.params.usstatus }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/user', function (req, res) {
    models.user.create({ usoid: req.body.usoid, usname: req.body.usname, uspassword: req.body.uspassword, peoid: req.body.peoid, usstatus: 1 })
   .then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});

router.put('/sys/user/:usoid', function (req, res) {
    models.user.update({ usname: req.body.usname, uspassword: req.body.uspassword, peoid: req.body.peoid, usstatus: req.body.usstatus },
    { 
        where: {
             usoid: req.params.usoid 
            }
        }).then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});

router.delete('/sys/user/:usoid', function (req, res) {
    models.user.destroy({ where: { usoid: req.params.usoid }})
    .then(function (user) {
       publicResource.ReturnResult(res, user);
   })
});
router.p
module.exports = router;
