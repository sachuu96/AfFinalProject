import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";


class TypeManager extends Component {

    addType(name) {


        var data = {"lab_type_name":name};
        console.log(data);
        fetch('http://localhost:8081/type/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Type is added');
        }).catch(err => {
            alert(err);
        })
    }

    updateType(id,name){

        var data={"lab_type_name":name};
            fetch('http://localhost:8081/type/'+id,{

                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Type is Updated');
            }).catch(err=>{
                alert(err);
            })

    }

    render() {
        return (
            < div id = "wrapper" >
                <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom': '0'}}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html">Digital Pluz</a>
                    </div>

                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                                </li>
                                <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div class="navbar-default sidebar" role="navigation">
                        <div class="sidebar-nav navbar-collapse">
                            <ul class="nav" id="side-menu">
                                <li class="sidebar-search">
                                    <div class="input-group custom-search-form">
                                        <input type="text" class="form-control" placeholder="Search..."/>
                                        <span class="input-group-btn">
        <button class="btn btn-default" type="button">
        <i class="fa fa-search"></i>
        </button>
        </span>
                                    </div>
                                </li>
                                <li>
                                    <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Lab Orders</a>
                                </li>
                                <li>
                                    <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> New Lab Test</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Option Manager<span class="fa arrow"></span></a>
                                    <ul class="nav nav-second-level">
                                        <li>
                                            <a href="flot.html">Lab Test Manager</a>
                                        </li>
                                        <li>
                                            <a href="http://localhost:3000/labtype">Laboratory Manager</a>
                                        </li>
                                        <li>
                                            <a href="flot.html">Sample Center Manager</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>

                <div>
                    <ul class="nav navbar-top-links navbar-right">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/labtype">
                                Lab Types
                            </a>
                        </li>

                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/departments">
                                Laboratory Departments
                            </a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/laboratories">
                                Laboratories
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
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        Laboratory Type
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Add Laboratory Type</h1>
                                                    <div className="form-group">
                                                        <label>Type Name</label>
                                                        <input id="type_name"  className="form-control" placeholder="@Chemical"/>
                                                    </div>


                                                    <button type="button" className="btn btn-default" onClick={()=>{this.addType(document.getElementById('type_name').value)}}>Submit</button>
                                                    <button type="reset" className="btn btn-default">Reset</button>

                                                    <div className="form-group">
                                                        <label>Select Type Id</label>
                                                        <select id="id" className="form-control">
                                                            <option>Select Id Before Updating</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                        <button type="button" onClick={()=>{this.updateType((document.getElementById('id').value),document.getElementById('type_name').value)}} className="btn btn-default" >Update Button</button>
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
export default TypeManager;