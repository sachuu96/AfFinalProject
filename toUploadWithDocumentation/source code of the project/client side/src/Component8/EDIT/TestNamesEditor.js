import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Nav from '../../components/Nav';

class TestNamesEditor extends Component{
    constructor(props){

        super(props)

        this.state = {

            selected : this.props.location.state.referrer,
            testid : null,
            testname : null,
            testcategory : null,
            testsubcategory : null
        }
        console.log(this.state.selected);
    }


    setTestName(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({testname:e.target.value})  ;
        console.log(e.target.value);
    }
    setCategoryName(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({testcategory:e.target.value});
        console.log(e.target.value);
    }
    setSubCategory(e){
        e.preventDefault();
        e.stopPropagation();
        this.setState({testsubcategory:e.target.value});
        console.log(e.target.value);
    }

    onChangetestid(event){
        event.preventDefault();
        event.stopPropagation();
        this._id = event.target.value;
        console.log(this._id);

    }
    onChangetestname(event){
        event.preventDefault();
        event.stopPropagation();
        this.testname = event.target.value;
        console.log(this.testname);
    }
    onChangecategory(event){
        event.preventDefault();
        event.stopPropagation();
        this.category= event.target.value;
        console.log(this.category);
    }
    onChangetestid(event){
        event.preventDefault();
        event.stopPropagation();
        this.subcategory = event.target.value;
        console.log(this.subcategory);
    }
    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        fetch('http://localhost:8081/test/'+this._id, {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{
            for(var test of data){
                var _id = test.this._id;
                var testname = test.this.testname;
                var  category = test.this.category;
                var subcategory = test.this.subcategory
            }
            this.setState({
                           _id:_id,
                             testname:testname,
                             category:category,
                             subcategory:subcategory

                     })
        }).catch(err =>{
            alert(err);
        })
    }

    searchID(event){
        event.preventDefault();
        event.stopPropagation();

        console.log(event.target.elements.idname.value);
        // fetch('http://localhost:8084/test/'+id,{
        //     method:'GET',
        //     headers:{'Content-Type':'application/json'}
        // }).then(response=>{
        //     return response.json();
        // }).then(data=>{
        //     for(var test of data){
        //         var _id=test._id;
        //         var testname=test.testname;
        //         var category=test.category;
        //         var subcategory=test.subcategory;
        //
        //     }
        //     this.setState({
        //             _id:_id,
        //             testname:testname,
        //             category:category,
        //             subcategory:subcategory
        //
        //     })
        //
        // }).catch(err=>{
        //     alert(err);
        // })
    }

    UpdateD(){

        if(this.state.testid =='' | this.state.testname=='' | this.state.testcategory=='' | this.state.testsubcategory==''){
            alert('One or more fields empty please fill all the fields');
        }

        else{

            console.log(this.state.selected._id);
            var data={"_id":this.state.selected._id,"testname":this.state.testname,"category":this.state.testcategory,"subcategory":this.state.testsubcategory};
            console.log(data);
            fetch('http://localhost:8081/test/'+data._id,{
                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('test is Updated');
            }).catch(err=>{
                alert(err);
            })
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/testnames').then(res => {
            //console.log(res);
            this.setState({
                testnames: res.data.data
            });
            console.log(this.state. testnames);
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
                                        Manage Test Name
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Update Test</h1>

                                                    <div className="form-group">
                                                        <label>Test Id</label>
                                                        <input id="testid"  className="form-control" placeholder={this.state.selected._id}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Test Name</label>
                                                        <input id="testname" onChange={this.setTestName.bind(this)} className="form-control" placeholder={this.state.selected.testname}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Category Name</label>
                                                        <input id="category" onChange={this.setCategoryName.bind(this)} className="form-control" placeholder={this.state.selected.category}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Sub Category Name</label>
                                                        <input id="subcategory" onChange={this.setSubCategory.bind(this)} className="form-control" placeholder={this.state.selected.subcategory}/>
                                                    </div>


                                                    <div>


                                                         <button type={"button"} onClick={this.UpdateD.bind(this)}>Update</button>

                                                    </div>
                                                    <div>
                                                        <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/testnames"><button type="button" className="btn btn-default" >Back</button></a>

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
export  default TestNamesEditor;
