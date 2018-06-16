const Express = require("express");
var router = Express.Router();
var Controller = require("./TypeController");

router.post('/', function (req, res) {
    Controller.insertType(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(data.status).send({message: err.message});
    })
})

router.get('/getType', function (req, res) {
    Controller.getAllTypes().then(function (data) {
        res.status(data.status).send({data: data.Userdata});
    })
})

router.get('/:id', function (req, res) {
    Controller.getType(req.params.id).then(function (data) {
        res.status(data.status).send({data: data.userSearched});
    })
})

router.put('/:id', function (req, res) {
    Controller.updateType(req.params.id, req.body).then(function (data) {
        res.status(data.status).send({message: "User Updated"});
    })
})

router.delete('/:id', function (req, res) {
    Controller.deleteType(req.params.id).then(function (data) {
        res.status(data.status).send({message: "User deleted"});
    })
})

router.delete('/', function (req, res) {
    Controller.deleteAllType().then(function (data) {
        res.status(data.status).send({message: "Done"});
    })
})

router.get('/', function (req, res) {
    console.log("safds");
    Controller.maxId().then(function (data) {
        res.status(data.status).send({data: data.maxIddata});
    }).catch(function (reason) {
        reason.status(reason.status).send(reason.message);
    })
});



module.exports = router;