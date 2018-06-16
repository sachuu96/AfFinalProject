import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import axios                from 'axios';


class LT extends Component {

    static get propTypes() {
        return {
            TestNameRequest: PropTypes.object,
            getAllTestNameReqs: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.TestNameRequest = this.props.TestNameRequest;
        this.getAllTestNameReqs = this.props.getAllTestNameReqs;

    }

    update(id, name) {
        var updatedName = prompt("Please enter updated test name:", name);

        axios.put('http://localhost:8081/test_name/' + id, {testName: updatedName}).then(results => {
            if(results.status == 200) {
                this.getAllTestNameReqs();

            }
        })

        
    }

    delete(id) {
        axios.delete('http://localhost:8081/test_name/' + id).then(results => {
            if(results.status == 200) {
                this.getAllTestNameReqs();
            }
        })
    }

    render(){
        return (

            <tr className="odd gradeX">
                <td className="center">{this.TestNameRequest._id}</td>
                <td className="center">{this.TestNameRequest.labName}</td>
                <td className="center">{this.TestNameRequest.catName}</td>
                <td className="center">{this.TestNameRequest.subcatName}</td>
                <td className="center">{this.TestNameRequest.testName}</td>

                <td>
                    <button className="btn btn-primary" onClick={(e) => this.update(this.TestNameRequest._id, this.TestNameRequest.testName)}>Edit
                    </button>
                </td>
                <td>
                    <button class="btn btn-primary" onClick={(e) => this.delete(this.TestNameRequest._id)}>Delete
                    </button>
                </td>

            </tr>


        );
    }
}

export default LT;
