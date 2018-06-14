import React, { Component } from 'react';
import axios from 'axios';


class ViewPatientDetails extends Component {
  constructor(){
    super()
    this.state={
      patients :[]
    }
   this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
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
          <button className='button' onClick={this.handleClick}>Click me</button>
          <table className="table">
                      <thead>
                          <tr >
                              <th>HIN</th>
                              <th>Name</th>
                              <th>DOB</th>
                              <th>Gender</th>
                          </tr>
                      </thead>
                      <tbody>
                        {this.state.patients.map(patient=>
                          <tr>
                          <td>{patient.HIN}</td>
                          <td>{patient.name}</td>
                          <td>{patient.dob}</td>
                          <td>{patient.gender}</td>
                          </tr>
                        )}
                      </tbody>

                  </table>
        </div>
    );
  }
}

export default ViewPatientDetails;
