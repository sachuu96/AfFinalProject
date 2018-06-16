import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Nav from '../../components/Nav';

class TypeManager extends Component {

    constructor(props){
        super(props);
        this.state={
            types:[],
            type_name:''
        }
        this.getTypes();

    }





    searchType(id){
        var tname;
        if(id=="Select Id Before Updating"){
            this.state.type_name='';
        }
        else
        fetch('http://localhost:8081/type/'+id , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();

        }).then(data=>{

            for( var type of data.data){
                tname=type.lab_type_name;

            }

            this.setState({
                type_name:tname
            })

        }).catch(err=>{
            alert(err);
        })

    }
    setTvalue(value){
        console.log(value);
        this.state.type_name+=value;
    }

    getTypes(){
        axios.get('http://localhost:8081/type/').then(res=>{
            console.log(res);
            this.setState({
                types:res.data.data
            });
            console.log(this.state.types);
        });
    }

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
    if(name!="" & id!="Select Id Before Updating") {
        var data = {"lab_type_name": name};
        fetch('http://localhost:8081/type/' + id, {

            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Type is Updated');
        }).catch(err => {
            alert(err);
        })
    }else {
        alert('Fill out all the fields and Select a ID');
    }

    }


    deleteType(id){
        if(id!="Select Id Before Updating") {
            fetch('http://localhost:8081/type/' + id, {

                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Type is Deleted');
            }).catch(err => {
                alert(err);
            })
        }else {
            alert('Select a ID for deleting!');
        }

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
                                                        <input id="type_name"  onChange={()=>{this.setTvalue(document.getElementById('type_name').value)}} className="form-control" placeholder="@Chemical"/>
                                                    </div>


                                                    <button id="submit" type="button" className="btn btn-success" onClick={()=>{this.addType(document.getElementById('type_name').value)}}>Submit</button>
                                                    <button type="reset" className="btn btn-info">Reset</button>

                                                    <div className="form-group">
                                                        <label>Select Type Id</label>
                                                        <select onChange={()=>{this.searchType(document.getElementById('id').value)}} id="id" className="form-control">
                                                            <option>Select Id Before Updating</option>
                                                            {
                                                                this.state.types.map(types =>
                                                                    <option>{types._id}</option>
                                                                )
                                                            }
                                                        </select>
                                                        </div>
                                                    <button type="button"  onClick={()=>{this.updateType((document.getElementById('id').value),document.getElementById('type_name').value)}} className="btn btn-success" >Update</button>
                                                    <button type="button" onClick={()=>{this.deleteType(document.getElementById('id').value)}} className="btn btn-danger">Delete</button>

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
