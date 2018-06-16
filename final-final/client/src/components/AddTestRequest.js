import React, { Component } from 'react';
import PropTypes 			from "prop-types";

//const AddTestRequest =function(props) {
class AddTestRequest extends Component{
  static get propTypes() {
    return {
      testNames: PropTypes.array,
      addTestReq:PropTypes.func
    }
  }

  constructor(props) {
      super(props);
      this.testNames = this.props.testNames;
      this.addTestReq = this.props.addTestReq;
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render(){
  return(

    <form onSubmit={this.addTestReq} role="form">
                      <div className="panel panel-primary">
                          <div className="panel-heading">
                              Add Test Requests
                          </div>
                          <div className="panel-body">
                            <div className="form-group">
                                <label>Priority</label>

                                  <select className="form-control" placeholder="Enter text" name="priority" >
                                      <option value="High">High</option>
                                      <option value="Medium">Medium</option>
                                      <option value="Low">Low</option>
                                  </select>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                  <select className="form-control" placeholder="Enter text" name="status" >
                                      <option value="Sample Collected">Sample Collected</option>
                                      <option value="Sample Pending">Sample Pending</option>
                                  </select>
                            </div>
                            <div className="form-group">
                                <label>Request ID</label>
                                <input className="form-control" placeholder="Enter text" name="id" />
                            </div>
                            <div className="form-group">
                                <label>Patient HIN</label>
                                <input className="form-control" placeholder="Enter text" name="HIN" />
                            </div>
                            <div className="form-group">
                                <label>Test Name</label>

                                  <select className="form-control" placeholder="Enter text" name="testName" >
                                    {this.props.testNames.map(testName=>
                                      <option>{testName.testname}</option>
                                    )}
                                  </select>
                            </div>
                            <div className="form-group">
                                <label>Test Category</label>
                                  <select className="form-control" placeholder="Enter text" name="testCat" >
                                    {this.props.testNames.map(testName=>
                                      <option>{testName.category}</option>
                                    )}
                                  </select>
                            </div>
                            <div className="form-group">
                                <label>Test Sub Category</label>
                                  <select className="form-control" placeholder="Enter text" name="testSubCat" >
                                    {this.props.testNames.map(testName=>
                                      <option>{testName.subcategory}</option>
                                    )}
                                  </select>
                            </div>

                            <div className="form-group">
                                <label>Request Date</label>
                                <input className="form-control" placeholder="Enter text" name="rDate" />
                            </div>
                            <div className="form-group">
                                <label>Due Date</label>
                                <input className="form-control" placeholder="Enter text" name="dDate" />
                            </div>
                            <div className="form-group">
                                <label>Request Person</label>
                                <input className="form-control" placeholder="Enter text" name="reqPerson" value="admin" disable/>
                            </div>
                            <div className="form-group">
                                <label>Comments</label>
                                <input className="form-control" placeholder="Enter text" name="comments" />
                            </div>
                          </div>
                          <div className="panel-footer">
                            <button type="submit" className="btn btn-default">Add</button>
                            <button type="reset" className="btn btn-default">Reset</button>

                          </div>
                      </div>
              </form>

  )
}
}

export default AddTestRequest
