import React, { Component } from 'react';
import PropTypes 			from "prop-types";

const AddTestRequest =function(props) {

  return(

    <form onSubmit={props.addTestReq} role="form">
                      <div className="panel panel-primary">
                          <div className="panel-heading">
                              Add Test Requests
                          </div>
                          <div className="panel-body">
                            <div className="form-group">
                                <label>Priority</label>
                                <input className="form-control" placeholder="Enter text" name="priority" />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input className="form-control" placeholder="Enter text" name="status" />
                            </div>
                            <div className="form-group">
                                <label>Request ID</label>
                                <input className="form-control" placeholder="Enter text" name="id" />
                            </div>
                            <div className="form-group">
                                <label>Patient HIN</label>
                                <input className="form-control" placeholder="Enter text" name="HIN" />
                            </div>
                            <div className="form-group">
                                <label>Test Name</label>
                                <input className="form-control" placeholder="Enter text" name="testName" />
                            </div>
                            <div className="form-group">
                                <label>Request Date</label>
                                <input className="form-control" placeholder="Enter text" name="rDate" />
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input className="form-control" placeholder="Enter text" name="dDate" />
                            </div>
                            <div className="form-group">
                                <label>Request Person</label>
                                <input className="form-control" placeholder="Enter text" name="reqPerson" />
                            </div>
                            <div className="form-group">
                                <label>Comments</label>
                                <input className="form-control" placeholder="Enter text" name="comments" />
                            </div>
                          </div>
                          <div className="panel-footer">
                            <button type="submit" className="btn btn-default">Add</button>
                            <button type="reset" className="btn btn-default">Reset</button>

                          </div>
                      </div>
              </form>

  )
}

export default AddTestRequest
