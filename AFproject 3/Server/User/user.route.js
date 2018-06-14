var express     = require('express');
var router      = express.Router();
var controller	= require('./user.controller');

router.post('/', (req, res) => {
    controller.add(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//add patient details and test results
router.post('/add_test_results_p_details', (req, res) => {
    controller.addPatientDetails(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//add specimen details
router.post('/add_sample_details', (req, res) => {
    controller.addSpecimen(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//add test Requests
router.post('/addTestReq', (req, res) => {
    controller.addTestRequests(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//get patient details and test results
router.get('/get_test_results_p_details', (req, res) => {
    controller.getAllPatientDetails().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});


//get all test Requests
router.get('/getTestReq', (req, res) => {
    controller.getAllTestReq().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//get All Specimen Details
router.get('/view_sample_details',function(req,res){
  controller.getAllSpecimen().then(function(response){
    res.status(response.status).send(response);
  }).catch(function(err){
    res.status(err.status).send(err.message);
  })
});

//get specific patient Details
router.get('/get_specific_p_detail/:id', (req, res) => {
    controller.getSpecificPatientDetails(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

//get specific sample detail according to request id

router.get('/get_specific_s_detail/:id', (req, res) => {
    controller.getSpecificSampleDetail(req.params.id).then(response => {
        res.status(response.status).send(response.data);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.get('/:id', (req, res) => {
    controller.getSingle(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});

router.put('/:id', (req, res) => {
    controller.update(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});


//delete test request
router.delete('/:id', (req, res) => {
    controller.deleteTestReq(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})


router.delete('/:id', (req, res) => {
    controller.delete(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})
//delete one specimen detail
router.delete('/delete_a_sample_detail/:id', (req, res) => {
    controller.deleteSampleDetail(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

//delete all specimen Details
router.delete('/', (req, res) => {
    controller.deleteAllSpecimen(req.params.id).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
})

module.exports = router;
