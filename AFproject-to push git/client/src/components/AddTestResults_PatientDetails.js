import React, { Component } from 'react';
import Nav from '../components/Nav';

const AddTestResults_PatientDetails = function(props) {

    return (

      <div id="wrapper">
        <Nav/>
<div id="page-wrapper">

  <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Add Test Results</h1>
        </div>
    </div>
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">

            </div>

            <div className="panel-body">
<div className="row">
  <div className="col-lg-6">
    <form onSubmit={props.addPatientDetails_testResults} role="form">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Patient Details
                        </div>
                        <div className="panel-body">

                              <div className="form-group">
                                  <label>Patient's HIN</label>
                                  <input className="form-control" placeholder="Enter text" name="HIN"/>
                              </div>
                              <div className="form-group">
                                  <label>Patient's Name</label>
                                  <input className="form-control" placeholder="Enter text" name="name"/>
                              </div>
                              <div className="form-group">
                                  <label>DOB</label>
                                  <input className="form-control" placeholder="Enter text" name="dob"/>
                              </div>
                              <div className="form-group">
                                  <label>Gender</label>
                                  <input className="form-control" placeholder="Enter text" name="gender"/>
                              </div>

                              <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Feild ID</th>
                                            <th>Test Feild Name</th>
                                            <th>Main Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td><textarea className="form-control" rows="1" col="1"></textarea></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <div className="panel-footer">
                            <button type="submit" className="btn btn-primary btn-lg">Save & Generate Report</button>
                        </div>
                    </div>
                  </form>
                </div>


<div className="col-lg-6">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                           Patient's Recent Tests
                      </div>
                      <div className="panel-body">
                        <table className="table table-striped table-bordered table-hover">
                              <tbody>
                                  <tr>
                                      <td>test from db</td>
                                      <td>date</td>

                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <div className="panel-footer">

                      </div>
                  </div>
              </div>
</div>

            </div>
        </div>

  </div>
</div>


</div>
</div>
    );
  }


export default AddTestResults_PatientDetails;
