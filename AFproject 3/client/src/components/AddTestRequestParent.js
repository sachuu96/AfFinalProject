import React, { Component } from 'react';
import AddTestRequest from '../components/AddTestRequest';
import axios from 'axios';

class AddTestRequestParent extends Component {
  constructor(props){
  super(props);

  this.state={
    priority:"",
    status:"",
    id:"",
    HIN:"",
    testName:"",
    rDate:"",
    dDate:"",
    reqPerson:"",
    comments:""


  };
 this.onSubmit=this.onSubmit.bind(this);

}

componentWillReceiveProps(props) {
  this.setState(props)
}


addTestReq=function(event){
  event.preventDefault();
  const priority = event.target.elements.priority.value;
  const status = event.target.elements.status.value;
  const id = event.target.elements.id.value;
  const HIN = event.target.elements.HIN.value;
  const testName = event.target.elements.testName.value;
  const rDate = event.target.elements.rDate.value;
  const dDate = event.target.elements.dDate.value;
  const reqPerson = event.target.elements.reqPerson.value;
  const comments = event.target.elements.comments.value;

  axios.post("http://localhost:8081" + '/addTestReq',
  {
    priority:priority,
    status: status,
    id:id,
    HIN:HIN,
    testName:testName,
    rDate:rDate,
    dDate:dDate,
    reqPerson:reqPerson,
    comments:comments

  }).then(result => {
    if(result.status == 200) {
      //this.getAllUsers();

      alert("added new test request!")
      window.location.reload(true);

  }
  }).catch(err => {
  alert(err);
  })

}

onSubmit(event){
  event.preventDefault();

}

  render() {
    return (

        <div>
          <AddTestRequest addTestReq={this.addTestReq}/>
        </div>

    );
  }
}

export default AddTestRequestParent;
