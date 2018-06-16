import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../dist/css/sb-admin-2.css';
import axios from "axios/index";
import Nav from '../../components/Nav';

class LabManager extends Component {
    constructor(props){
        super(props);
        this.state={
            labs:[],
            deps: [],
            types: []


        }
        this.getLabs();
        this.getDeps();
        this.getTypes();
    }
    getLabs(){
        axios.get('http://localhost:8081/laboratory/').then(res=>{
            console.log(res);
            this.setState({
                labs:res.data.data
            });
            console.log(this.state.labs);
        });
    }
    getDeps(){
        axios.get('http://localhost:8081/department/').then(res=>{
            console.log(res);
            this.setState({
                deps:res.data.data
            });
            console.log(this.state.deps);
        });
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

    addLab(name,type,department,count,incharge,location,email,num1,num2) {


        var data = {"lab_name":name,"lab_type":type,"department":department,"count":count,"incharge":incharge,"location":location,"email":email,"contact_1":num1,"contact_2":num2};
        console.log(data);
        fetch('http://localhost:8081/laboratory/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            return response.json();
        }).then(data => {
            alert('Laboratory is added');
        }).catch(err => {
            alert(err);
        })
    }


    updateLab(id,name,type,department,count,incharge,location,email,num1,num2){
        if(name!=""  & type!=""  &department!=""  &count!=""  &incharge!=""  &location!=""  &email!=""  &num1!=""  &num2!=""  & id!="Select Id Before Updating") {

            var data = {
                "lab_name": name,
                "lab_type": type,
                "department": department,
                "count": count,
                "incharge": incharge,
                "location": location,
                "email": email,
                "contact_1": num1,
                "contact_2": num2
            };

            fetch('http://localhost:8081/laboratory/' + id, {

                method: 'PUT',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Laboratory is Updated');
            }).catch(err => {
                alert(err);
            })
        }else {
            alert('Fill out all the fields and Select a ID');
        }
    }

    deleteLab(id){
        if(id!="Select Id Before Updating") {
            fetch('http://localhost:8081/laboratory/' + id, {

                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }).then(response => {
                return response.json();
            }).then(data => {
                alert('Laboratory is Deleted');
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
                                        Laboratory
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <form role="form">
                                                    <h1>Add Laboratory</h1>
                                                    <div className="form-group">
                                                        <label>Laboratory Name</label>
                                                        <input id="name" className="form-control" placeholder="@Chemical"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Laboratory Type</label>
                                                          <select id="type" className="form-control">
                                                              <option>Select Lab Type</option>
                                                              {
                                                                  this.state.types.map(types =>
                                                                      <option>{types.lab_type_name}</option>
                                                                  )
                                                              }
                                                          </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Department</label>
                                                          <select id="dep" className="form-control">
                                                              <option>Select Department</option>
                                                              {
                                                                  this.state.deps.map(departments =>
                                                                      <option>{departments.department_name}</option>
                                                                  )
                                                              }
                                                          </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Count</label>
                                                        <input id="cou" className="form-control" placeholder="@[1..*]"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Lab Incharge</label>
                                                        <input id="inch" className="form-control" placeholder="@John Smith"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <input id="loc" className="form-control" placeholder="@Los Angeles"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input id="mail" type="email" className="form-control" placeholder="@john@gmail.com"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Contact 1</label>
                                                        <input id="con1" type="tel" className="form-control" placeholder="@0982341234"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Contact 2</label>
                                                        <input id="con2" type="tel" className="form-control" placeholder="@9843784231"/>
                                                    </div>


                                                    <button type="button" className="btn btn-success" onClick={()=>{this.addLab(document.getElementById('name').value,document.getElementById('type').value,document.getElementById('dep').value,document.getElementById('cou').value,document.getElementById('inch').value,document.getElementById('loc').value,document.getElementById('mail').value,document.getElementById('con1').value,document.getElementById('con2').value)}}>Submit</button>
                                                    <button type="reset" className="btn btn-info">Reset</button>

                                                    <div className="form-group">
                                                        <label>Select Laboratory Id</label>
                                                        <select id="id" className="form-control">
                                                            <option>Select Id Before Updating</option>
                                                            {
                                                                this.state.labs.map(labpratory =>
                                                                    <option>{labpratory._id}</option>
                                                                )
                                                            }
                                                        </select>
                                                     </div>
                                                    <button type="button" onClick={()=>{this.updateLab(document.getElementById('id').value,document.getElementById('name').value,document.getElementById('type').value,document.getElementById('dep').value,document.getElementById('cou').value,document.getElementById('inch').value,document.getElementById('loc').value,document.getElementById('mail').value,document.getElementById('con1').value,document.getElementById('con2').value)}}  className="btn btn-success">Update</button>
                                                    <button type="button" onClick={()=>{this.deleteLab(document.getElementById('id').value)}} className="btn btn-danger">Delete</button>

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
export default LabManager;
