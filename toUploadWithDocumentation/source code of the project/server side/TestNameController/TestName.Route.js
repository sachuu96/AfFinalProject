const Express = require("express");
var router = Express.Router();
var Controller = require("./TestNameController");

router.post('/', function (req, res) {
    Controller.insertTestName(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(data.status).send({message: err.message});
    })
})

router.get('/', function (req, res) {
    Controller.getAllTestNames().then(function (data) {
        res.status(data.status).send({data: data.Userdata});
    })
})

router.get('/:id', function (req, res) {
    Controller.getTestName(req.params.id).then(function (data) {
        res.status(data.status).send({data: data.userSearched});
    })
})

router.put('/:id', function (req, res) {
    Controller.updateTestName(req.params.id, req.body).then(function (data) {
        res.status(data.status).send({message: "User Updated"});
    })
})

router.delete('/:id', function (req, res) {
    Controller.deleteTestName(req.params.id).then(function (data) {
        res.status(data.status).send({message: "User deleted"});
    })
})

router.delete('/', function (req, res) {
    Controller.deleteAllTestNames().then(function (data) {
        res.status(data.status).send({message: "Done"});
    })
})

module.exports = router;