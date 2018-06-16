const Express       = require('express');
var router          = Express.Router();
var depController  = require('./DepartmentController');

router.post('/', function(req, res) {
    depController.insertDepartment(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/', function(req, res) {
    depController.getDepartments().then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/:id', function(req, res) {
    depController.findDepartment(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.put('/:id', function(req, res) {
    depController.updateDepartment(req.params.id, req.body).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.delete('/:id', function(req, res) {
    depController.deleteDepartment(req.params.id).then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

module.exports = router;