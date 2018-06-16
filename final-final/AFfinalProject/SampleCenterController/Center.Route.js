const Express = require("express");
var router = Express.Router();
var Controller = require("./CenterController");

router.post('/', function (req, res) {
    Controller.insertCenter(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(data.status).send({message: err.message});
    })
})

router.get('/', function (req, res) {
    Controller.getAllCenters().then(function (data) {
        res.status(data.status).send({data: data.Userdata});
    })
})

router.get('/:id', function (req, res) {
    Controller.getCenter(req.params.id).then(function (data) {
        res.status(data.status).send({data: data.userSearched});
    })
})

router.put('/:id', function (req, res) {
    Controller.updateCenter(req.params.id, req.body).then(function (data) {
        res.status(data.status).send({message: "User Updated"});
    })
})

router.delete('/:id', function (req, res) {
    Controller.deleteCenter(req.params.id).then(function (data) {
        res.status(data.status).send({message: "User deleted"});
    })
})

router.delete('/', function (req, res) {
    Controller.deleteAllCenters().then(function (data) {
        res.status(data.status).send({message: "Done"});
    })
})

module.exports = router;