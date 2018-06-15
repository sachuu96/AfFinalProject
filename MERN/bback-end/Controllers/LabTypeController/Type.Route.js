const Express       = require('express');
var router          = Express.Router();
var typeController  = require('./TypeController');

router.post('/', function(req, res) {
    typeController.insertType(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/', function(req, res) {
    typeController.getTypes().then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/:id', function(req, res) {
    typeController.findType(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id', function(req, res) {
    typeController.updateType(req.params.id, req.body).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id', function(req, res) {
    typeController.deleteType(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

module.exports = router;