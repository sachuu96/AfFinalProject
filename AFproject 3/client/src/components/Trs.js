import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import Tr from '../components/Tr';

class Trs extends Component {
  static get propTypes() {
      return {
        testRequests: PropTypes.array
      }
    }

    constructor(props) {
      super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }


render(){
  this.testRequests = this.props.testRequests;
    return (
      <div>
        <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
            <thead>
                <tr>
                    <th>Action</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Request ID</th>
                    <th>Patient's HIN</th>
                    <th>Test Name</th>
                    <th>Request Date</th>
                    <th>Due Date</th>
                    <th>Request Person</th>
                    <th>Comments</th>
                    <th>Add Sample Details</th>
                </tr>
            </thead>
            <tbody>
                {
                  this.testRequests.map(testRequest => {
                  return <Tr key={testRequest._id} testRequest={testRequest} getAllTestReqs={() => this.props.getAllTestReqs()}/>
                  })
                }

            </tbody>
        </table>
      </div>
    );
}
}

export default Trs;
