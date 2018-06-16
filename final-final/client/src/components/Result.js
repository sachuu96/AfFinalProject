import React, { Component } from 'react';
import axios from 'axios';
import Report from '../components/Report';

class Result extends Component {

  constructor(props){
    super(props);
    this.state={
      patient:[],
      report:[]
    };

    this.getSpecificUser=this.getSpecificUser.bind(this);
  }

  getSpecificUser=function(event){
    event.preventDefault();
    const hin=event.target.elements.hin.value;
    axios.get('http://localhost:8081/labs/get_specific_p_detail/'+hin).then(res =>{


      this.setState({
        patient:res.data
      })

      console.log(this.state.patient);
      if(this.state.patient==""){
        alert('No patient. Check the HIN again')
      }

    }).catch(function(err){
      alert('No patient!')
    });
  }

  addTestResults=function(event){
    event.preventDefault();
    const hin=event.target.elements.hin.value;
    const testName=event.target.elements.testName.value;
    const result=event.target.elements.result.value;

axios.put('http://localhost:8081/labs/update_patient/'+hin,{
  testName:testName,
  result:result
}).then(res=>{
  alert('updated successfully')
})

const status="Sample Collected"
axios.put('http://localhost:8081/labs/update_status/'+hin,{
  status:"Sample Collected"
}).then(res=>{
  alert('Status also updated!')
})

axios.get('http://localhost:8081/labs/get_specific_p_detail/'+hin).then(res =>{

  this.setState({
    report:res.data
  })
  })

}

  render() {
    return (

        <div>
          <div className="col-lg-12">
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
