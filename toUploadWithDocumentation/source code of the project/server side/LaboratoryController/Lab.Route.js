const Express       = require('express');
var router          = Express.Router();
var labController  = require('./LabController');

router.post('/', function(req, res) {
    labController.insertLab(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/', function(req, res) {
    labController.getLabs().then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/:id', function(req, res) {
    labController.findLab(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id', function(req, res) {
    labController.updateLab(req.params.id, req.body).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id', function(req, res) {
    labController.deleteLab(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

module.exports = router;