import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import axios                from 'axios';


class LS extends Component {

    static get propTypes() {
        return {
            TypeRequest: PropTypes.object,
            getAllTypeReqs: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.TypeRequest = this.props.TypeRequest;
        this.getAllTypeReqs = this.props.getAllTypeReqs;

    }

    update(id, name) {
        var updatedName = prompt("Please enter updated type:", name);

        axios.put('http://localhost:8081/sample_center_types/' + id, {typeName: updatedName}).then(results => {
            if(results.status == 200) {
                this.getAllTypeReqs();
                window.location.href='http://localhost:3000/labsample';
            }
        })
    }

    delete(id) {
        axios.delete('http://localhost:8081/sample_center_types/' + id).then(results => {
            if(results.status == 200) {
                this.getAllTypeReqs();
            }
        })
    }

    render(){
        return (

                <tr className="odd gradeX">
                    <td className="center">{this.TypeRequest._id}</td>
                    <td className="center">{this.TypeRequest.typeName}</td>
                    <td>
                        <button className="btn btn-primary" onClick={(e) => this.update(this.TypeRequest._id, this.TypeRequest.typeName)}>Edit
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary" onClick={(e) => this.delete(this.TypeRequest._id)}>Delete
                        </button>
                    </td>

                </tr>


        );
    }
}

export default LS;
