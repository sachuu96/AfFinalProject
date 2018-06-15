import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import axios                from 'axios';
import Add_Sample from '../components/Add_Sample';

class Tr extends Component {

  static get propTypes() {
          return {
              testRequest: PropTypes.object,
              getAllTestReqs: PropTypes.func
          }
      }

      constructor(props) {
        super(props);
        this.testRequest = this.props.testRequest;
        this.getAllTestReqs = this.props.getAllTestReqs;
        this.state={
          reqId:''
        }
    }

    delete(id) {
        axios.delete('http://localhost:8081' + '/' + id).then(results => {
            if(results.status == 200) {
                this.getAllTestReqs();
            }
        })
    }

render(){
    return (
      <tr>
        <td>
          <a href="http://localhost:3000/add_sample_details">Add Sample Details</a><br/>
          <a href="http://localhost:3000/add_test_results_p_details">Add Test Results</a><br/>
          <a href="http://localhost:3000/report">View Report</a><br/>
          <a href="http://localhost:3000/view_sample_details">View Sample Details</a><br/>
        </td>
        <td>{this.testRequest.priority}</td>
        <td>{this.testRequest.status}</td>
        <td>{this.testRequest.id}</td>
        <td>{this.testRequest.HIN}</td>
        <td>{this.testRequest.testName}</td>
        <td>{this.testRequest.testSubCat}</td>
        <td>{this.testRequest.testCat}</td>
        <td>{this.testRequest.rDate}</td>
        <td>{this.testRequest.dDate}</td>
        <td>{this.testRequest.reqPerson}</td>
        <td>{this.testRequest.comments}</td>
        <button class="btn btn-primary" onClick={(e) => this.delete(this.testRequest._id)}>Delete test request</button>
      </tr>
    );
}
}

export default Tr;
