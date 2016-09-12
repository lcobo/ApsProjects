var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/methodology', function (req, res) {
    models.methodology.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/methodology/id/:id', function (req, res) {
    models.methodology.findAll({ 
        where: { meoid: req.params.id}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/methodology/nam/:name', function (req, res) {
    models.methodology.findAll({ 
        where: { $or: [{mename: {$like: '%'+req.params.name+'%'}}, {medescription: {like: '%'+ req.params.name+'%'}}, {meauthor: {like: '%'+ req.params.name+'%'}}] }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/methodology/st/:mestatus', function (req, res) {
    models.methodology.findAll({ 
        where: { mestatus: req.params.mestatus}}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.post('/sys/methodology', function (req, res) {
    models.methodology.create({ meoid: req.body.meoid, mename: req.body.mename, medescription: req.body.medescription, mestatus: req.body.mestatus, veoid: req.body.veoid, meauthor: req.body.meauthor })
   .then(function (methodology) {
       publicResource.ReturnResult(res, methodology);
   })
});

router.put('/sys/methodology/:meoid', function (req, res) {
  models.methodology.update({ mename: req.body.mename, medescription: req.body.medescription, mestatus: req.body.mestatus, veoid: req.body.veoid, meauthor: req.body.meauthor },
    { 
        where: {
             meoid: req.params.meoid 
            }
        }).then(function (methodology) {
       publicResource.ReturnResult(res, methodology);
   })
});

router.delete('/sys/methodology/:meoid', function (req, res) {
    models.methodology.destroy({ where: { meoid: req.params.meoid }})
    .then(function (methodology) {
       publicResource.ReturnResult(res, methodology);
   })
});
router.p
module.exports = router;