import React, { Component } from 'react';
import ViewSampleDetails from '../components/ViewSampleDetails';
import axios from 'axios';


class ViewSampleDetailsParent extends Component{
 constructor(props){
  super(props);

  this.state={
    testRequestIDS:[]


  };
}

componentDidMount(){

  axios.get('http://localhost:8081/labs/getTestReq').then(res=>{

    this.setState({
      testRequestIDS:res.data.data
    });

  })
}





  render(){
  return(
    <div>
      <ViewSampleDetails testRequestIDS={this.state.testRequestIDS}/>

    </div>
  );
}

}

export default ViewSampleDetailsParent;
