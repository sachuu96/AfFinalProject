import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';
import axios from 'axios';

class LabSampleChild extends Component{
    constructor(){
        super()
        this.state = {
            sampleTypeReq: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8081/sample_center_types').then(res => {
            this.setState({
                sampleTypeReq: res.data.data
            });
        })
    }

    render(){
        return
                    <div>

                    <table width="100%" className="table table-striped table-bordered table-hover"
                           id="dataTables-example">
                        <thead>
                        <tr>
                            <th>Sample Center Type ID</th>
                            <th>Sample Center Type Name</th>
                            <th></th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr className="odd gradeX">
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
                            <td>
                                <button id="1" value className="btn btn-primary" title="Edit" data-toggle="tooltip"
                                        data-placement="right  ">Edit
                                </button>
                            </td>

                        </tr>


                        </tbody>
                    </table>

                    </div>

    }

}

export default LabSampleChild;
