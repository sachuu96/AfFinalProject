import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import axios                from 'axios';


class SC extends Component {

    static get propTypes() {
        return {
            CenterRequest: PropTypes.object,
            getAllCenterReqs: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.CenterRequest = this.props.CenterRequest;
        this.getAllCenterReqs = this.props.getAllCenterReqs;

        this.state = {
            access: false

        }
    }

    delete(id) {
        axios.delete('http://localhost:8081/sample_center/' + id).then(results => {
            if(results.status == 200) {
                this.getAllCenterReqs();
            }
        })
    }

    render(){
        return (

            <tr className="odd gradeX">
                <td className="center">{this.CenterRequest._id}</td>
                <td className="center">{this.CenterRequest.typeName}</td>
                <td className="center">{this.CenterRequest.centerName}</td>
                <td className="center">{this.CenterRequest.incharge}</td>
                <td className="center">{this.CenterRequest.locn}</td>
                <td className="center">{this.CenterRequest.emailaddress}</td>
                <td className="center">{this.CenterRequest.cont1}</td>
                <td className="center">{this.CenterRequest.cont2}</td>

                <td>
                    <button className="btn btn-primary" onClick={(e) => this.delete(this.CenterRequest._id)}>Delete
                    </button>
                </td>


            </tr>


        );
    }
}

export default SC;
