import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Nav from '../../components/Nav';

class TestCategoriesManager extends Component{
    /*constructor() {
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
    }*/
    addCategory(categoryname,subcategoryname,specimentype,specimen_Retention_Type,duration){
        var data = {"categoryName":categoryname,"subcategoryName":subcategoryname,"specimen_Type":specimentype,"specimen_Retention_Type":specimen_Retention_Type,"duration":duration};
        console.log(data);
        fetch('http://localhost:8081/category/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Category is added');
        }).catch(err => {
            alert(err);
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
                                        Test Categories
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Add Test Categories</h1>
                                                    <div className="form-group">
                                                        <label>Category Name</label>
                                                        <input id="categoryname" className="form-control" placeholder="@Chemical"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Sub Category Name</label>
                                                        <input id="sub" className="form-control" placeholder="@Gas"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Specimen Type</label>
                                                        <input id="specimentype" className="form-control" placeholder="@Biology"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Specimen Retention Type</label>
                                                        <input id="specimenretention" className="form-control" placeholder="@[1..*]"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Duration</label>
                                                        <input id="duration" className="form-control" placeholder="@John Smith"/>
                                                    </div>





                                                    <button type="button" className="btn btn-default" onClick={()=>{this.addCategory(document.getElementById('categoryname').value,document.getElementById('sub').value,document.getElementById('specimentype').value,document.getElementById('specimenretention').value,document.getElementById('duration').value)}}>Submit</button>
                                                    <button type="reset" className="btn btn-default">Reset</button>

                                                    <div className="form-group">
                                                        <label>Select Category Id</label>
                                                        <select className="form-control">
                                                            <option>Select Category Id Before Updating</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                        <label> Category Name</label>
                                                        <input className="form-control" placeholder="@Chemical"/>
                                                        <button type="submit" className="btn btn-default">Update Button</button>
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



            </div>

        )
    }
}
export default TestCategoriesManager;
