var express     = require('express');
var router      = express.Router();
var controller	= require('./user.controller');


//add test types
router.post('/test',function (req,res) {
   controller.insertTest(req.body).then(function (data) {
       res.status(data.status).send({message:data.message});
   }).catch(function (err) {
       res.status(err.status).send({message:err.message});
   })
});

//get test types
router.get('/test', function(req, res)  {
    controller.searchAllTest().then(function(data)  {
        res.status(data.status).send({data: data.data});
    }).catch(function(err)  {
        res.status(err.status).send({message: err.message});
    });
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

/*
router.get('/', (req, res) => {
    controller.getAll().then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});
*/
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
//get test details of specific patient
router.get('/get_test_details_of_p/:id', (req, res) => {
    controller.getRecentPatientTests(req.params.id).then(response => {
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

//get specific test request getSpecificTestRequest
router.get('/get_specific_tr_detail/:id', (req, res) => {
    controller.getSpecificTestRequest(req.params.id).then(response => {
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

//update patient test results
router.put('/update_patient/:id', (req, res) => {
    controller.updatePatientTestResults(req.params.id, req.body).then(response => {
        res.status(response.status).send(response);
    }).catch(err => {
        res.status(err.status).send(err.message);
    })
});
//update test request status
router.put('/update_status/:id', (req, res) => {
    controller.updateStatus(req.params.id, req.body).then(response => {
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
