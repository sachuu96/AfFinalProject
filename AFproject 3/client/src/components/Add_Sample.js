import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import ViewPatientDetails_testDetails from '../components/ViewPatientDetails_testDetails';
const Add_Sample =function(props) {

    return (

<div id="wrapper">

<form onSubmit={props.addSpecimen} role="form">
                  <div className="panel panel-primary">
                      <div className="panel-body">
                        <div className="form-group">
                            <label>Request ID</label>
                            <input className="form-control" placeholder="Enter text" name="reqId" />
                        </div>
                        <div className="form-group">
                            <label>Test Type</label>
                            <input className="form-control" placeholder="Enter text" name="testType" />
                        </div>
                        <div className="form-group">
                            <label>Retention Type</label>
                            <input className="form-control" placeholder="Enter text" name="retentionType" />
                        </div>
                        <div className="form-group">
                            <label>Collected Date</label>
                            <input className="form-control" placeholder="Enter text" name="collectedDate" />
                        </div>
                        <div className="form-group">
                            <label>Remarks</label>
                              <textarea className="form-control" rows="3" name="remarks"></textarea>
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input className="form-control" placeholder="Enter text" name="location" />
                        </div>
                        <div className="form-group">

                                  <div className="radio">
                                      <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="stored" checked name="storedORdestroyed"
                                          /> stored
                                      </label>
                                  </div>
                                  <div className="radio">
                                      <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="destroyed" name="storedORdestroyed"
                                          />destroyed
                                      </label>
                                  </div>
                        </div>
                        <div className="form-group">
                            <label>Stored/Destroyed Date</label>
                            <input className="form-control" placeholder="Enter text" name="sORdDate" />
                        </div>

                      </div>
                      <div className="panel-footer">
                        <button type="submit" className="btn btn-default">Add</button>
                        <button type="reset" className="btn btn-default">Reset</button>

                      </div>
                  </div>
                  </form>
              </div>





    );

}

export default Add_Sample;
