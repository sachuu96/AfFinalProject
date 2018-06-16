const Express       = require('express');
var router          = Express.Router();
var userController  = require('./UserController');

router.post('/', function(req, res) {
    userController.insertUser(req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});

router.get('/', function(req, res) {
    userController.getUser().then(function(data) {
        res.status(data.status).send({data:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
});


module.exports = router;