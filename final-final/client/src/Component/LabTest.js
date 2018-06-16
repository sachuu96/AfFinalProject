import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import Nav from '../../components/Nav';


const LabTest= function(props){
    return(
        <div id="wrapper">

        <Nav/>

    <div id="page-wrapper">
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Laboratory Tests
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-10">
                                <form role="form">
                                    <div class="form-group">
                                        <label>Laboratory:</label>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        <label>Category:</label>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        <label>Sub Category:</label>
                                            <select class="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                            </select>
                                        <label>Test Name:</label>
                                        <input class="form-control"/>
                                        <br/>

                                        <p>

                                        <button type="submit" class="btn btn-primary">Submit</button>

                                        </p>

                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>

        <div class="col-md-16">
            <form onSubmit={props.addLabTest} role="from">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Test Fields
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-10">
                            <form role="form">
                                <div class="form-group">
                                        <label>Laboratory:</label>

                                    <input className="form-control" placeholder="Enter text.." name="testName"/>
                                    <br/>

                                        <div class="box-footer">
                                            <button type="submit">click</button>
                                            <a class="btn btn-primary" data-toggle="modal" data-target="#ParentFieldModal">
                                                <i class="fa fa-edit">

                                                </i>
                                                    Add Test Field
                                            </a>
                                        <br/>
                                            <br/>
                                                    <a class="btn btn-primary" data-toggle="modal" data-target="#ParentFieldModal">
                                                        <i class="fa fa-edit">
                                                             Add Test Sub Field

                                                        </i>

                                                     </a>
                                            <br/>
                                            <br/>
                                                             <a class="btn btn-primary" data-toggle="modal" data-target="#ParentFieldModal">
                                                                <i class="fa fa-edit">
                                                                    </i>
                                                                            View Data
                                                             </a>
                                        </div>

                                </div>
                            </form>
                        </div>
                    </div>
                 </div>
            </div>
                </form>
        </div>
    </div>
    </div>

    </div>
    </div>



)
}

export default LabTest;
