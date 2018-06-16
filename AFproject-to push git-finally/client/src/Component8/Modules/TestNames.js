import React, {Component} from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Viewname from '../Tables/viewTestNames';
 import Nav from '../../components/Nav';
 var base = require('../../staticConfig');


class TestNames extends  Component{
    constructor(props){
        super(props)
        this.state = {
            allTypes: [],
            setSelectedType : [],
        }
        this.getAllTypes();

    }
    getAllTypes(){
        fetch('http://localhost:8081/test/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allTypes : data.data});

        }).catch(err=>{
            alert('failed to upload Types:'+err);
        })
        console.log('getAllMethod called');
    }

    getSearchDetails(id){
        fetch('http://localhost:8081/test/'+id, {
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
    selectTestname(testid){
        var data = {"_id":testid};
        console.log(data);
        fetch('http://localhost:8081/test/', {
            method: 'GET',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('test is selected!');
        }).catch(err => {
            alert(err);
        })
    }
   /* getdetails(testid,testname,category,subcategory){

    }*/

   /* componentDidMount() {
        axios.get('http://localhost:8081/testnames').then(res => {
            //console.log(res);
            this.setState({
                testnames: res.data.data
            });
            console.log(this.state. testnames);
        })
    }*/
   /* addDepartment(labtype) {
        axios.post("http://localhost:8081" + '/', {lab_type_name: labtype.name}).then(result => {
            if(result.status == 200) {
                //this.getAllUsers();
                alert("added!")
            }
        }).catch(err => {
            alert(err);
        })
    }*/
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
                                        Test Names
                                    </div>
                                    <div class="panel-body">
                                        <div id="dataTables-example_filter" class="dataTables_filter">
                                            <label>Search:<input id="x" type="search" class="form-control input-sm" placeholder="" aria-controls="dataTables-example" /></label>
                                            <button ype="button" className="btn btn-primary"  onClick={()=>{this.getSearchDetails(document.getElementById('x').value)}}>Search</button>

                                            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/typemanager"><button type="submit" className="btn btn-default" className="btn btn-primary">Manage Details</button></a>

                                        </div>
                                        <Viewname allTypes={this.state.allTypes} selectedType = {type => this.setSelectedType(type)}/>

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

export default TestNames;
