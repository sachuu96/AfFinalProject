import React, { Component } from 'react';


const AddTestResults_PatientDetails = function(props) {

    return (

      <div id="wrapper">

        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginbottom: '0'}}>
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
