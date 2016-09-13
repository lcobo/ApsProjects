var models = require("../../ControllerModels.js");
var publicResource = require("../../ControllerRouters.js");
var express = require('express');
var router = express.Router();


router.get('/sys/optionquestion', function (req, res) {
    models.optionquestion.findAll({ limit: 1000 }).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/optionquestion/id/:oqoid', function (req, res) {
    models.optionquestion.findAll({ 
        where: {
            oqoid: req.params.oqoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});

router.get('/sys/optionquestion/fk/:quoid', function (req, res) {
    models.optionquestion.findAll({ 
        where: {
            quoid: req.params.quoid }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});



router.get('/sys/optionquestion/nam/:name', function (req, res) {
    models.optionquestion.findAll({ 
        where: { oqdescription: {$like: '%'+req.params.name+'%'} }}).then(function (result) {
        publicResource.ReturnResult(res, result);
    });
});


router.post('/sys/optionquestion', function (req, res) {
    models.optionquestion.create({ oqoid: req.body.oqoid, quoid: req.body.quoid, oqdescription: req.body.oqdescription })
   .then(function (optionquestion) {
       publicResource.ReturnResult(res, optionquestion);
   })
});

router.put('/sys/optionquestion/:oqoid', function (req, res) {
    models.optionquestion.update({ quoid: req.body.quoid, oqdescription: req.body.oqdescription  },
    { 
        where: {
             oqoid: req.params.oqoid 
            }
        }).then(function (optionquestion) {
       publicResource.ReturnResult(res, optionquestion);
   })
});

router.delete('/sys/optionquestion/:oqoid', function (req, res) {
    models.optionquestion.destroy({ where: { oqoid: req.params.oqoid }})
    .then(function (optionquestion) {
       publicResource.ReturnResult(res, optionquestion);
   })
});
router.p
module.exports = router;
