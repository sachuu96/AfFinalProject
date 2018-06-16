import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import axios from 'axios';
import Nav from '../../components/Nav';


class SampleCenters extends Component{

    constructor(props){
        super(props)
        this.state={
            sampleCenters:[],
            sampleTypes: []
        }

        this.addSampleCenter = this.props.addSampleCenter;
    }

    componentDidMount(){
        axios.get('http://localhost:8081/sample_center').then( res => {
            this.setState({
                sampleCenters: res.data.data
            });
        })

        axios.get('http://localhost:8081/sample_center_types').then(res =>{
            this.setState({
                sampleTypes: res.data.data
            });
        })
    }

    delete(id) {
        axios.delete('http://localhost:8081/sample_center' + id).then(results => {
            if(results.status == 200) {
                alert("Done");
            }
        })
    }
    printme(){
        alert("printed");
    }

    render(){
    return(
        <div id="wrapper">

            <Nav/>
            <div id="page-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Laboratory Tests
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <form onSubmit={this.addSampleCenter} role="from">
                                            <div className="form-group">

                                                    <label>Sample Center Type:</label>

                                                    <select className="form-control" name="typeName">
                                                        {this.state.sampleTypes.map(TypeRequest =>
                                                        <option>{TypeRequest.typeName}</option>

                                                        )}
                                                    </select>

                                                <label>Sample Center Name:</label>
                                                <input className="form-control" name="centerName"/>
                                                <label>Incharge:</label>
                                                <input className="form-control" name="incharge"/>
                                                <label>Location:</label>
                                                <input className="form-control" name="locn"/>
                                                <label>Email:</label>
                                                <input className="form-control" name="emailaddress"/>
                                                <label>Contact 01:</label>
                                                <input className="form-control" name="cont1"/>
                                                <label>Contact 02:</label>
                                                <input className="form-control" name="cont2"/>
                                                <br/>

                                                <p>

                                                    <button type="submit" className="btn btn-primary">Add New Sample Center</button>

                                                </p>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                DataTables Advanced Tables
                            </div>


                            <div className="panel-body">

                                <table width="100%" className="table table-striped table-bordered table-hover"
                                       id="dataTables-example">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Sample Center Type</th>
                                        <th>Sample Center Name</th>
                                        <th>Incharge</th>
                                        <th>Location</th>
                                        <th>Email</th>
                                        <th>Contact1</th>
                                        <th>Contact2</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.sampleCenters.map(CenterRequest =>
                                    <tr className="odd gradeX">
                                        <td className="center">{CenterRequest._id}</td>
                                        <td className="center">{CenterRequest.typeName}</td>
                                        <td className="center">{CenterRequest.centerName}</td>
                                        <td className="center">{CenterRequest.incharge}</td>
                                        <td className="center">{CenterRequest.locn}</td>
                                        <td className="center">{CenterRequest.emailaddress}</td>
                                        <td className="center">{CenterRequest.cont1}</td>
                                        <td className="center">{CenterRequest.cont2}</td>
                                        <td>
                                            <button id="1" value class="btn btn-primary" title="Edit" data-toggle="tooltip" data-placement="right  ">Edit</button>
                                        </td>
                                        <td>
                                            <button id="1" value className="btn btn-primary" title="Delete"
                                                    data-toggle="tooltip" data-placement="right  " >Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={(CenterRequest) => this.delete(this.sampleCenters._id || this.sampleCenters.id)}>delete</button>
                                        </td>

                                    </tr>

                                    )}

                                    </tbody>
                                </table>




                            </div>


                        </div>

                    </div>


                </div>
            </div>


        </div>




    )}
}

export default SampleCenters;
