import React, { Component } from 'react';
import axios from 'axios';
import AddSampleDetails from '../components/AddSampleDetails';
class GetTestTypes extends  Component{

  constructor(props){
    super(props);
    this.state={
    testTypes:[]
    }

  }

  componentDidMount(){
    axios.get('http://localhost:8081/labs/test').then(res=>{
      //console.log(res);
      this.setState({
        testTypes:res.data.data
      });
      console.log(this.state.testTypes);
    })
  }

  render(){
    return (
      <div>
          <AddSampleDetails testTypes={this.state.testTypes}/>
      </div>
    )
  }
}

export default GetTestTypes;
