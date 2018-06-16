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
    comments:"",
    testNames:[]
  };
 this.onSubmit=this.onSubmit.bind(this);

}

componentWillReceiveProps(props) {
  this.setState(props)
}

componentDidMount(){
  axios.get('http://localhost:8081/labs/test').then(res=>{
    //console.log(res);
    this.setState({
      testNames:res.data.data
    });
  //  console.log(this.state.testTypes);
  })
/*  const status = "Sample Pending"
  axios.get('http://localhost:8081/getSamplePendingRequests/' +status).then(res=>{
      console.log(res.data.data);
      this.setState({
        samplePending:res.data
      })
      if(this.state.testRequests==""){
        alert('No test details. Check the request ID again')
      }

  }).catch(function(err){
    alert('No test details!')
  })
  */
}


addTestReq=function(event){
  event.preventDefault();
  const priority = event.target.elements.priority.value;
  const status = event.target.elements.status.value;
  const id = event.target.elements.id.value;
  const HIN = event.target.elements.HIN.value;
  const testName = event.target.elements.testName.value;
  const testSubCat=event.target.elements.testSubCat.value;
  const testCat=event.target.elements.testCat.value;
  const rDate = event.target.elements.rDate.value;
  const dDate = event.target.elements.dDate.value;
  const reqPerson = event.target.elements.reqPerson.value;
  const comments = event.target.elements.comments.value;

if((priority!="")&&(status!="")&&(id!="")&&(HIN!="")&&(testName!="")&&(testSubCat!="")&&(testCat!="")&&(rDate!="")&&(dDate!="")&&(reqPerson!="")&&(comments!=""))
{
  axios.post("http://localhost:8081/labs" + '/addTestReq',
  {
    priority:priority,
    status: status,
    id:id,
    HIN:HIN,
    testName:testName,
    testSubCat:testSubCat,
    testCat:testCat,
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
else{
  alert('All the feilds must be filled!');
}
}

onSubmit(event){
  event.preventDefault();

}

  render() {
    return (

        <div>
          <AddTestRequest addTestReq={this.addTestReq} testNames={this.state.testNames}/>
        </div>

    );
  }
}

export default AddTestRequestParent;
