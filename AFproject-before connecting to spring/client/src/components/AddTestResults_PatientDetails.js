import React, { Component } from 'react';
import Nav from '../components/Nav';
import PropTypes 			from "prop-types";
import axios from 'axios';
import Result from '../components/Result';

//const AddTestResults_PatientDetails = function(props) {
class AddTestResults_PatientDetails extends Component{
  constructor(props){
    super(props);
    this.state={

      testDetails:[],

//      Patients:[]
    };
    this.testRequestIDS=this.props.testRequestIDS;
    this.testDetailsOfPatient=this.props.testDetailsOfPatient;
  }

static get propTypes() {
  return {

    addPatientDetails_testResults:PropTypes.func

  }
}

//constructor(props) {
//    super(props);
//    this.addPatientDetails_testResults = this.props.addPatientDetails_testResults;
//}

componentWillReceiveProps(props) {
  this.setState(props)
}

getRecentTestsOfPAtient=function(event){
  event.preventDefault();
  const hin=event.target.elements.hin.value;
  axios.get('http://localhost:8081/get_test_details_of_p/'+hin).then(res =>{


    this.setState({
      testDetails:res.data
    })

    console.log(this.state.Patients);
    if(this.state.Patients==""){
      alert('No patient. Check the HIN again')
    }

  }).catch(function(err){
    alert('No patient!-'+err)
  });
}

/*
componentDidMount(){
  axios.get('http://localhost:8081/get_test_results_p_details').then(res=>{
    this.setState({
      Patients:res.data.data
    });
  })
}
*/
render(){
  this.addPatientDetails_testResults = this.props.addPatientDetails_testResults;
    return (

      <div id="wrapper">
        <Nav/>
<div id="page-wrapper">

  <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Add Test Results</h1>
        </div>
    </div>
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">

            </div>

            <div className="panel-body">
<div className="row">
  <div className="col-lg-6">
    <form onSubmit={this.addPatientDetails_testResults} role="form">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Patient Details
                        </div>
                        <div className="panel-body">

                              <div className="form-group">
                                  <label>Patient's HIN</label>

                                    <select className="form-control" placeholder="Enter text" name="HIN" >
                                      {this.props.testRequestIDS.map(testRequestID=>
                                        <option>{testRequestID.HIN}</option>
                                      )}

                                    </select>
                              </div>
                              <div className="form-group">
                                  <label>Patient's Name</label>
                                  <input className="form-control" placeholder="Enter text" name="name"/>
                              </div>
                              <div className="form-group">
                                  <label>DOB</label>
                                  <input className="form-control" placeholder="Enter text" name="dob"/>
                              </div>
                              <div className="form-group">
                                  <label>Gender</label>
                                  <input className="form-control" placeholder="Enter text" name="gender"/>
                              </div>

                        </div>
                        <div className="panel-footer">
                            <button type="submit" className="btn btn-primary">Save Patient Details</button>
                        </div>
                    </div>
                  </form>
                  <Result/>

                </div>


<div className="col-lg-6">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                           Patient's Recent Tests
                      </div>
                      <div className="panel-body">
                        <form onSubmit={this.getRecentTestsOfPAtient.bind(this)} role="form">
                          <div className="form-group">
                              <label>Patient's HIN</label>
                                <select className="form-control" placeholder="Enter text" name="hin" >
                                  {this.props.testRequestIDS.map(testRequestID=>
                                    <option>{testRequestID.HIN}</option>
                                  )}

                                </select>
                          </div>
                              <button type="submit" class="btn btn-primary">View Details</button>
                          </form>



                          <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Test Name</th>
                                        <th>Test Category</th>
                                        <th>Test Sub Category</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                       {
                                         this.state.testDetails.map(entry => <tr className={"success"}>
                                          <td>{ entry.testName }</td>
                                          <td>{ entry.testCat }</td>
                                          <td>{ entry.testSubCat }</td>
                                          <td>{entry.status}</td>
                                         </tr>)
                                       }

                                </tbody>
                            </table>
                        </div>

                      </div>
                      <div className="panel-footer">

                      </div>
                  </div>
              </div>
</div>

            </div>
        </div>

  </div>
</div>


</div>
</div>
    );
  }

}
export default AddTestResults_PatientDetails;
