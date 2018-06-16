import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import '../dist/css/table-css.css';
import Nav from '../../components/Nav';

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
            window.location.href='http://localhost:3000/labtype';
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
      <Nav/>
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
            <button type="button" onClick={()=>{this.getSearchDetails(document.getElementById('search').value)}} className="btn btn-info">Search</button>
            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/typemanager"><button type="submit" className="btn btn-primary">Manage Details</button></a>

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
