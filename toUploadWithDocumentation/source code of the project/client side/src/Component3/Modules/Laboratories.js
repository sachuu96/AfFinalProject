import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../dist/css/sb-admin-2.css';
import ViewLab from '../Tables/viewLabs';
import axios from "axios/index";
import Nav from '../../components/Nav';


class Laboratories extends Component {
    constructor(props){
        super(props);
        this.state={
            allLabs:[],
            selectedLab : [],
        }
        this.getAllLabs();

    }

    getAllLabs(){
        fetch('http://localhost:8081/laboratory/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allLabs : data.data});
        }).catch(err=>{
            alert('Failed to Load Laboratories:'+err);
        })
        console.log('getAllMethod called');
    }

    setSelectedLab(type){
        var newarr = this.state.selectedLab.slice();
        newarr.push(type);
        this.setState({selectedLab: newarr});
        console.log(this.state.selectedLab);
        console.log('selected');
    }

    getSearchDetails(id){
        fetch('http://localhost:8081/laboratory/'+id , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allLabs : data.data});
        }).catch(err=>{
            alert('Failed to Search Laboratories:'+err);
            window.location.href='http://localhost:3000/laboratories';
        })
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
        Laboratory Department
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
        <label>Search:<input type="search" id="search" class="form-control input-sm" placeholder="" aria-controls="dataTables-example"/></label>
            <button type="button" onClick={()=>{this.getSearchDetails(document.getElementById('search').value)}} className="btn btn-info">Search</button>
            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/labmanager"><button type="submit" className="btn btn-primary">Manage Details</button></a>

        </div>


<div id="all-table" class="#">
        <ViewLab  allLabs={this.state.allLabs} selectedLab = {lab => this.setSelectedLab(lab)}/>
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
export default Laboratories;
