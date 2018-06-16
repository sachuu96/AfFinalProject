import React, { Component } from 'react';
import axios from 'axios';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../dist/css/sb-admin-2.css';
import  Viewsub from '../Tables/viewSubCategories';
import Nav from '../../components/Nav';

var base = require('../../staticConfig');

class TestSubCategories extends  Component{
    constructor(props){
        super(props)
        this.state = {
            allsubcategory:[],
            setSelectedSub : [],
        }
        this.getAllSub();
    }
    getAllSub(){
        fetch('http://localhost:8081/subcategory/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allsubcategory: data.data});

        }).catch(err=>{
            alert('failed to upload Types:'+err);
        })
        console.log('getAllMethod called');
    }
    getSearchDetails(id){
        fetch('http://localhost:8081/subcategory/'+id, {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allsubcategory : data.data});

        }).catch(err=>{
            alert('Failed to Search sub category.This id is not defined');
        })
    }
    setSelectedSub(type){
        var newarr = this.state.selectedType.slice();
        newarr.push(type);
        this.setState({selectedType: newarr});
        console.log(this.state.selectedType);
        console.log('selected');
    }
   /* componentDidMount() {
        axios.get('http://localhost:8081/testsubcategories').then(res => {
            //console.log(res);
            this.setState({
                testsubcategories: res.data.data
            });
            console.log(this.state.testsubcategories);
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
                                        Test Sub Categories
                                    </div>
                                    <div class="panel-body">
                                        <div id="dataTables-example_filter" class="dataTables_filter">
                                            <label>Search:<input type="search" id="x" class="form-control input-sm" placeholder="" aria-controls="dataTables-example"/></label>
                                            <button ype="button" className="btn btn-primary" onClick={()=>{this.getSearchDetails(document.getElementById('x').value)}}>Search</button>
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testsubcategoriesmanager"><button type="submit" className="btn btn-primary">Add new Category</button></a>

                                        </div>
                                        <Viewsub allsubcategory={this.state.allsubcategory}  setSelectedSub = {type => this.setSelectedSub(type) } />


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
export default TestSubCategories;
