import React, { Component } from 'react';
import axios from 'axios';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/metisMenu/metisMenu.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../dist/css/sb-admin-2.css';
import ViewDepartment from '../Tables/viewDepartments';
import Nav from '../../components/Nav';

class Departments extends Component {
    constructor(props){
        super(props);
        this.state={
            allDepartments:[],
            selectedDepartment : [],
        }
        this.getAllDepartments();

    }

    getAllDepartments(){
        fetch('http://localhost:8081/department/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allDepartments : data.data});
        }).catch(err=>{
            alert('Failed to Load Departments:'+err);
        })
        console.log('getAllMethod called');
    }

    getSearchDetails(id){
        fetch('http://localhost:8081/department/'+id , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allDepartments : data.data});
        }).catch(err=>{
            alert('Failed to Search Departments:'+err);
            window.location.href='http://localhost:3000/departments';
        })
        console.log('search called');
    }

    showHideToggle(id){
        this.getSearchDetails(id);
    }


    setSelectedDepartment(type){
        var newarr = this.state.selectedDepartment.slice();
        newarr.push(type);
        this.setState({selectedDepartment: newarr});
        console.log(this.state.selectedDepartment);
        console.log('selected');
    }

    render() {
        return (
            < div
        id = "wrapper" >
            <Nav/>

        < div >
        < ul
    class
        = "nav navbar-top-links navbar-right" >
            < li
    class
        = "dropdown" >
            < a
    class
        = "dropdown-toggle"
        data-toggle = "dropdown"
        href = "http://localhost:3000/labtype" >
            Lab
        Types
        </a>
        </li>

        < li
    class
        = "dropdown" >
            < a
    class
        = "dropdown-toggle"
        data-toggle = "dropdown"
        href = "http://localhost:3000/departments" >
            Laboratory
        Departments
        </a>
        </li>
        < li
    class
        = "dropdown" >
            < a
    class
        = "dropdown-toggle"
        data-toggle = "dropdown"
        href = "http://localhost:3000/laboratories" >
            Laboratories
            </a>

            </li>
            </ul>
            </div>

            < div >
            < div
        id = "page-wrapper" >
            < div
    class
        = "row" >
            < div
    class
        = "col-lg-12" >
            </div>
            </div>
            <div
    class
        = "row" >
            < div
    class
        = "col-lg-12" >
            < div
    class
        = "panel panel-default" >
            < div
    class
        = "panel-heading" >
            Laboratory
        Departments
        </div>
        < div
    class
        = "panel-body" >
            < div
        id = "dataTables-example_filter"
    class
        = "dataTables_filter" >
            < label > Search
    :<
        input id="search"
        type = "search"
    class
        = "form-control input-sm"
        placeholder = ""
        aria-controls = "dataTables-example" /> </label>
                <button type="button" onClick={()=>{this.showHideToggle(document.getElementById('search').value)}} className="btn btn-info">Search</button>
                <a className="dropdown-toggle" data-toggle="dropdown" href="http://localhost:3000/depmanager"><button type="submit" className="btn btn-primary">Manage Details</button></a>

            </div>

            <div id="view">
                <ViewDepartment  allDepartment={this.state.allDepartments} selectedDepartment = {department => this.setSelectedDepartment(department)}/>
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
export default Departments;
