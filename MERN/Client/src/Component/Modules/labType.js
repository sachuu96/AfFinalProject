import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import Viewtype from '../Tables/viewLabTypes';
import axios from "axios/index";


var base= require('../../staticConfig');

class labType extends Component {

    constructor(props){
        super(props);
        this.state={
            allTypes:[],
            setSelectedType : [],
        }
        this.getAllTypes();

    }

    getAllTypes(){
        fetch('http://localhost:8081/type/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allTypes : data.data});

        }).catch(err=>{
            alert('Failed to Load Types:'+err);
        })
        console.log('getAllMethod called');
    }

    getSearchDetails(id){
        fetch('http://localhost:8081/type/'+id, {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allTypes : data.data});

        }).catch(err=>{
            alert('Failed to Search Types:'+err);
        })
    }

    setSelectedType(type){
        var newarr = this.state.selectedType.slice();
        newarr.push(type);
        this.setState({selectedType: newarr});
        console.log(this.state.selectedType);
        console.log('selected');
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
        <div class="panel panel-default">
        <div class="panel-heading">
        Laboratory Types
    </div>
    <div class="panel-body">
        <div id="dataTables-example_filter" class="dataTables_filter">
        <label>Search:<input id="search" type="search" class="form-control input-sm" placeholder="" aria-controls="dataTables-example"/></label>
            <button type="button" onClick={()=>{this.getSearchDetails(document.getElementById('search').value)}} className="btn btn-default">Search</button>
            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/typemanager"><button type="submit" className="btn btn-default">Manage Details</button></a>

        </div>


       <Viewtype  allTypes={this.state.allTypes} selectedType = {type => this.setSelectedType(type)}/>


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
export default labType;