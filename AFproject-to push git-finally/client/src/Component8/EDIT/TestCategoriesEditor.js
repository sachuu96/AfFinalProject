import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Nav from '../../components/Nav';

class TestCategoriesEditor extends Component{
    constructor() {
        super()
        this.state = {
            testcategories: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8081/testcategories').then(res => {
            //console.log(res);
            this.setState({
                testcategories: res.data.data
            });
            console.log(this.state.testcategories);
        })
    }
    render() {
        return (
            < div id = "wrapper" >
                <Nav/>

                <div>
                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testnames">
                                Test Names
                            </a>
                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testcategories">
                                Test Categories
                            </a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testsubcategories">
                                Test Sub Categories
                            </a>

                        </li>
                    </ul>
                </div>

                <div>
                    <div id="page-wrapper">
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        Manage Test Categories
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Update Categories</h1>
                                                    <div className="form-group">
                                                        <label> Select Category ID</label>
                                                        <select className="form-control">
                                                            <option>Select Sub Category Id Before Updating</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Category Name</label>
                                                        <input className="form-control" placeholder="@Gas"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Sub Category Name</label>
                                                        <input className="form-control" placeholder="@Biology"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Specimen Type</label>
                                                        <input className="form-control" placeholder="@Biology"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Specimen Retention Type</label>
                                                        <input className="form-control" placeholder="@Biology"/>
                                                    </div>

                                                    <div>





                                                        <button type="submit" className="btn btn-default">Update</button>


                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Manage Sub Categories
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Delete Categories</h1>
                                                    <div className="form-group">
                                                        <label> Select Category ID</label>
                                                        <select className="form-control">
                                                            <option>Select Category Id Before Updating</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <button type="submit" className="btn btn-default">Delete
                                                        </button>


                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testcategories"><button type="submit" className="btn btn-default" >Back</button></a>

                </div>

            </div>

        )
    }

}
export default TestCategoriesEditor;
