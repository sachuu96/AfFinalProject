import React, { Component } from 'react';
import axios from 'axios';

class ViewPatientDetails_testDetails extends Component {
  constructor(){
    super()
    this.state={
      patients :[]
    }
    //this.handleClick=this.handleClick.bind(this)
  }

  componentDidMount(){
    axios.get('http://localhost:8081/get_test_results_p_details').then(res=>{
      //console.log(res);
      this.setState({
        patients:res.data.data
      });
      console.log(this.state.patients);
    })
  }


  render() {
    return (
        <div>

        </div>

    );
  }
}

export default ViewPatientDetails_testDetails;
