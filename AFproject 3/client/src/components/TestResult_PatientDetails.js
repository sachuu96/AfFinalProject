import React, { Component } from 'react';
import AddTestResults_PatientDetails from '../components/AddTestResults_PatientDetails';
import axios from 'axios';



class TestResults_PatientDetails extends Component {
  constructor(props){
  super(props);

  this.state={
    HIN:"",
    name:"",
    dob:"",
    gender:""

  };
  this.onSubmit=this.onSubmit.bind(this);

}

addPatientDetails_testResults=function(event){
  event.preventDefault();
  const HIN=event.target.elements.HIN.value;
  const name=event.target.elements.name.value;
  const dob=event.target.elements.dob.value;
  const gender=event.target.elements.gender.value;


  axios.post("http://localhost:8081" + '/add_test_results_p_details',
  {
    HIN: HIN,
    name:name,
    dob:dob,
    gender:gender
  }).then(result => {
    if(result.status == 200) {
      //this.getAllUsers();
      alert("added patient details and test results!")
  }
}).catch(err => {
  alert(err);
})

}

onSubmit(event){
  event.preventDefault();
  console.log(this.HIN.value);
  console.log(this.name.value);
  console.log(this.dob.value);
  console.log(this.gender.value);

}

  render() {
    return (

        <div>
          <p>add p details</p>
          <AddTestResults_PatientDetails addPatientDetails_testResults={this.addPatientDetails_testResults}/>
        </div>

    );
  }
}

export default TestResults_PatientDetails;
