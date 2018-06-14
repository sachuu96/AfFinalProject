import React, { Component } from 'react';
import AddSampleDetails from '../components/AddSampleDetails';
import axios from 'axios';

class SampleDetails extends Component{
  constructor(props){
  super(props);

  this.state={
    testType:"",
    retentionType:"",
    collectedDate:"",
    remarks:"",
    location:"",
    storedORdestroyed:"",
    sORdDate:""


  };
  this.onSubmit=this.onSubmit.bind(this);

}


addSpecimen=function(event){
  event.preventDefault();
  const reqId = event.target.elements.reqId.value;
  const testType=event.target.elements.testType.value;
  const retentionType=event.target.elements.retentionType.value;
  const collectedDate=event.target.elements.collectedDate.value;
  const remarks=event.target.elements.remarks.value;
  const location=event.target.elements.location.value;
  const storedORdestroyed=event.target.elements.storedORdestroyed.value;
  const sORdDate=event.target.elements.sORdDate.value;


  axios.post("http://localhost:8081" + '/add_sample_details',
  {
    reqId:reqId,
    testType: testType,
    retentionType:retentionType,
    collectedDate:collectedDate,
    remarks:remarks,
    location:location,
    storedORdestroyed:storedORdestroyed,
    sORdDate:sORdDate
  }).then(result => {
    if(result.status == 200) {
      //this.getAllUsers();
      alert("added specimen details!")
  }
}).catch(err => {
  alert(err);
})

}

onSubmit(event){
  event.preventDefault();
  console.log(this.testType.value);
  console.log(this.retentionType.value);
  console.log(this.collectedDate.value);
  console.log(this.remarks.value);
  console.log(this.location.value);
  console.log(this.storedORdestroyed.value);
  console.log(this.sORdDate.value);

}

  render(){
    console.log(this.props);
    const {params}=this.props;
  return(
    <div>


      <AddSampleDetails addSpecimen={this.addSpecimen}/>
    </div>
  )
}

}

export default SampleDetails;
