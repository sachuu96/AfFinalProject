var express     = require('express');
var router      = express.Router();
var Controller  = require('./Category.Controller');

router.post('/',function (req, res)  {
    Controller.insertCategory(req.body).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
});
router.get('/', function(req, res)  {
    Controller.searchAllCategory().then(function(data)  {
        res.status(data.status).send({data: data.data});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:id', function(req, res)  {
    Controller.searchCategory(req.params.id).then(function(data)  {
        res.status(data.status).send({data: data.data});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    });
});

router.put('/:id',function (req, res)  {
    Controller.updateCategory(req.params.id, req.body).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
});

router.delete('/:id', function(req, res)  {
    Controller.deleteCategory(req.params.id).then(function(data)  {
        res.status(data.status).send({message: data.message});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    })
})

module.exports = router;