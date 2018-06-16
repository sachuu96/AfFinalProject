import React, { Component } from 'react';
import axios from 'axios';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../dist/css/sb-admin-2.css';
import Nav from '../../components/Nav';

class DepartmentManager extends Component {

    constructor(props){
        super(props);
        this.state={
            dep:[],
            dep_name:''
        }
        this.getDeps();
    }

    searchDep(id){
        var dname;
        if(id=="Select Id Before Updating"){
            this.state.dep_name='';
        }
        else
            fetch('http://localhost:8081/department/'+id , {
                method:'GET',
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();

            }).then(data=>{

                for( var dep of data.data){
                    dname=dep.department_name;

                }

                this.setState({
                    dep_name:dname
                })

            }).catch(err=>{
                alert(err);
            })

    }

    getDeps(){
        axios.get('http://localhost:8081/department/').then(res=>{
            console.log(res);
            this.setState({
                dep:res.data.data
            });
            console.log(this.state.dep);
        });
    }
    addDepartment(name) {
        var data = {"department_name":name};
        console.log(data);
        fetch('http://localhost:8081/department/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Department is added');
        }).catch(err => {
            alert(err);
        })
    }
    updateDepartment(id,name){
        if(name!="" & id!="Select Id Before Updating") {
            var data = {"department_name": name};
            fetch('http://localhost:8081/department/' + id, {

                method: 'PUT',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Department is Updated');
            }).catch(err => {
                alert(err);
            })
        }else {
            alert('Fill out all the fields and Select a ID');
        }

    }

    deleteDepartment(id){
        if(id!="Select Id Before Updating") {
            fetch('http://localhost:8081/department/' + id, {

                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Department is Deleted');
            }).catch(err => {
                alert(err);
            })
        }else {
            alert('Select a ID for deleting!');
        }

    }

    render() {
        return (
            < div
                id = "wrapper" >
                <Nav/>

                < div >
                    < ul
                        class
                            = "nav navbar-top-links navbar-right" >
                        < li
                            class
                                = "dropdown" >
                            < a
                                class
                                    = "dropdown-toggle"
                                data-toggle = "dropdown"
                                href = "http://localhost:3000/labtype" >
                                Lab
                                Types
                            </a>
                        </li>

                        < li
                            class
                                = "dropdown" >
                            < a
                                class
                                    = "dropdown-toggle"
                                data-toggle = "dropdown"
                                href = "http://localhost:3000/departments" >
                                Laboratory
                                Departments
                            </a>
                        </li>
                        < li
                            class
                                = "dropdown" >
                            < a
                                class
                                    = "dropdown-toggle"
                                data-toggle = "dropdown"
                                href = "http://localhost:3000/laboratories" >
                                Laboratories
                            </a>

                        </li>
                    </ul>
                </div>

                < div >
                    < div
                        id = "page-wrapper" >
                        < div
                            class
                                = "row" >
                            < div
                                class
                                    = "col-lg-12" >
                            </div>
                        </div>
                        <div
                            class
                                = "row" >
                            < div
                                class
                                    = "col-lg-12" >
                                < div
                                    class
                                        = "#" >
                                    < div
                                        class
                                            = "panel-heading" >

                                    </div>
                                    < div
                                        class
                                            = "panel-body" >

                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                Laboratory Department
                                            </div>
                                            <div className="panel-body">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <form role="form">
                                                            <h1>Add Laboratory Department</h1>
                                                            <div className="form-group">
                                                                <label>Department Name</label>
                                                                <input id="name"  className="form-control" placeholder="@Chemical"/>
                                                            </div>

                                                            <button type="button" className="btn btn-success" onClick={()=>{this.addDepartment(document.getElementById('name').value)}}>Submit</button>
                                                            <button type="reset" className="btn btn-info">Reset</button>

                                                            <div className="form-group">
                                                                <label>Select Department Id</label>
                                                                <select onChange={()=>{this.searchDep(document.getElementById('id').value)}} id="id" className="form-control">
                                                                    <option>Select Id Before Updating</option>
                                                                    {
                                                                        this.state.dep.map(department =>
                                                                            <option>{department._id}</option>
                                                                        )
                                                                    }
                                                                </select>

                                                            </div>
                                                            <button type="button" onClick={()=>{this.updateDepartment(document.getElementById('id').value,document.getElementById('name').value)}} className="btn btn-success">Update</button>
                                                            <button type="button" onClick={()=>{this.deleteDepartment(document.getElementById('id').value)}} className="btn btn-danger">Delete</button>
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
                </div>






            </div>
        )
    }
}
export default DepartmentManager;
