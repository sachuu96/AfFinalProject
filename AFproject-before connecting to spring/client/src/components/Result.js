import React, { Component } from 'react';
import axios from 'axios';


class Result extends Component {

  addTestResults=function(event){
    event.preventDefault();
    const hin=event.target.elements.hin.value;
    const testName=event.target.elements.testName.value;
    const result=event.target.elements.result.value;

axios.put('http://localhost:8081/update_patient/'+hin,{
  testName:testName,
  result:result
}).then(res=>{
  alert('updated successfully')
})

const status="Sample Collected"
axios.put('http://localhost:8081/update_status/'+hin,{
  status:"Sample Collected"
}).then(res=>{
  alert('Status also updated!')
})

}

  render() {
    return (

        <div>
          <div className="col-lg-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                     Add Test Results
                                </div>
                                <div className="panel-body">
                                  <form onSubmit={this.addTestResults.bind(this)} role="form">
                                    <div className="form-group">
                                        <label>Patient's HIN</label>
                                          <input className="form-control" placeholder="Enter text" name="hin" />
                                    </div>
                                    <div className="form-group">
                                        <label>Test Name</label>
                                          <input className="form-control" placeholder="Enter text" name="testName"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Result</label>
                                          <input className="form-control" placeholder="Enter text" name="result"/>
                                    </div>
                                        <button type="submit" class="btn btn-primary">Add Test Results</button>
                                    </form>
                                </div>
                                <div className="panel-footer">
                                </div>
                            </div>
                          </div>
        </div>

    );
  }
}

export default Result;
