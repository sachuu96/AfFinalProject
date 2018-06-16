import React, { Component } from 'react';
import axios from 'axios';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../dist/css/sb-admin-2.css';
import testcategoriesmanager from "../Manager/TestCategoriesManager";
import Viewcategory from '../Tables/viewTestCategories';
import Nav from '../../components/Nav';

class TestCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allCategory: [],
            setSelectedCategory: [],
        }
        this.getAllCategory();
    }
    getAllCategory(){
        fetch('http://localhost:8081/category/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({ allCategory : data.data});

        }).catch(err=>{
            alert('failed to upload Types:'+err);
        })
        console.log('getAllMethod called');
    }
    getSearchDetails(id){
        fetch('http://localhost:8081/category/'+id, {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allCategory : data.data});

        }).catch(err=>{
            alert('Failed to Search Types:'+err);
        })
    }
    setSelectedCategory(type){
        var newarr = this.state.selectedType.slice();
        newarr.push(type);
        this.setState({selectedType: newarr});
        console.log(this.state.selectedType);
        console.log('selected');
    }
   /* componentDidMount() {
        axios.get('http://localhost:8081/testcategories').then(res => {
            //console.log(res);
            this.setState({
                testcategories: res.data.data
            });
            console.log(this.state.testcategories);
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
                                        Test Categories
                                    </div>
                                    <div class="panel-body">
                                        <div id="dataTables-example_filter" class="dataTables_filter">
                                            <label>Search:<input type="search" id="x" class="form-control input-sm" placeholder="" aria-controls="dataTables-example"/></label>
                                            <button ype="button" className="btn btn-primary" onClick={()=>{this.getSearchDetails(document.getElementById('x').value)}}>Search</button>
                                            <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testcategoriesmanager"><button type="submit" className="btn btn-default" className="btn btn-primary">Add new Category</button></a>

                                        </div>
                                        <Viewcategory allCategory={this.state.allCategory} setSelectedCategory={type => this.setSelectedCategory(type)}/>

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

export  default TestCategories;
