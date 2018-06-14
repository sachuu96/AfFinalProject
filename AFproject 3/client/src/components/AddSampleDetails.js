import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import ViewPatientDetails_testDetails from '../components/ViewPatientDetails_testDetails';
const AddSampleDetails =function(props) {

    return (

      <div id="wrapper">
<ViewPatientDetails_testDetails/>
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: '0'}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Digital Pluz</a>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
                        <li>
                            <a href="http://localhost:3000/test_request"><i className="fa fa-dashboard fa-fw"></i> Lab Orders</a>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> New Lab Test</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Option Manager<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
<div id="page-wrapper">

  <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Add Sample Details</h1>
        </div>
    </div>
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">

            </div>

            <div className="panel-body">

<div className="col-lg-12">
<form onSubmit={props.addSpecimen} role="form">
                  <div className="panel panel-primary">

                      <div className="panel-heading">
                          Add Sample Specimen Details
                      </div>

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
                        <a href="http://localhost:3000/test_request">
                          <button type="button" className="btn btn-default">Back</button>
                        </a>
                      </div>
                  </div>
          </form>
              </div>

            </div>

        </div>

  </div>
</div>
</div>
      </div>

    );

}

export default AddSampleDetails;
