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
    sORdDate:"",
    testTypes:[],
    testRequestIDS:[],
    labLocations:[]


  };
  this.onSubmit=this.onSubmit.bind(this);

}

componentDidMount(){


  axios.get('http://localhost:8081/labs/getTestReq').then(res=>{
    //console.log(res);
    this.setState({
      testRequestIDS:res.data.data
    });
  //  console.log(this.state.specimens);
  })

  axios.get('http://localhost:8081/laboratory').then(res=>{
    this.setState({
      labLocations:res.data.data
    });
  })
}


addSpecimen=function(event){
  event.preventDefault();
  const reqId = event.target.elements.reqId.value;
//  const testType=event.target.elements.testType.value;
  const retentionType=event.target.elements.retentionType.value;
  const collectedDate=event.target.elements.collectedDate.value;
  const remarks=event.target.elements.remarks.value;
  const location=event.target.elements.location.value;
  const storedORdestroyed=event.target.elements.storedORdestroyed.value;
  const sORdDate=event.target.elements.sORdDate.value;

if((reqId!="")&&(retentionType!="")&&(collectedDate!="")&&(remarks!="")&&(location!="")&&(storedORdestroyed!="")&&(sORdDate!=""))
{
  axios.post("http://localhost:8081/labs" + '/add_sample_details',
  {
    reqId:reqId,
  //  testType: testType,
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
else{
  alert('All the feilds must be filled!');
}

}

onSubmit(event){
  event.preventDefault();
  //console.log(this.testType.value);
  console.log(this.retentionType.value);
  console.log(this.collectedDate.value);
  console.log(this.remarks.value);
  console.log(this.location.value);
  console.log(this.storedORdestroyed.value);
  console.log(this.sORdDate.value);

}

  render(){
    //console.log(this.props);
    const {params}=this.props;
  return(
    <div>


      <AddSampleDetails addSpecimen={this.addSpecimen} testTypes={this.state.testTypes} testRequestIDS={this.state.testRequestIDS}
        labLocations={this.state.labLocations}
        />

    </div>
  )
}

}

export default SampleDetails;
