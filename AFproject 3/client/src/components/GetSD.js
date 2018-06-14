import React, { Component } from 'react';
import axios from 'axios'

class GetSD extends Component {
  constructor(){
    super()
    this.state={
      specimens :[]
    }
    this.handleClick=this.handleClick.bind(this)
  }

handleClick(){
  axios.get('http://localhost:8081/view_sample_details').then(res=>{
    console.log(res);
    this.setState({
      specimens:res.data
    });
    console.log(this.state.specimens);
  })
}



  render() {

    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>Click me</button>
          <table className="table">
                      <thead>
                          <tr >
                              <th>Test Type</th>
                              <th>Retention Type</th>
                              <th>Collected Date</th>
                              <th>Remarks</th>
                              <th>Location</th>
                              <th>Stored/Destroyed</th>
                              <th>Stored/Destroyed Date</th>
                          </tr>
                      </thead>
                      <tbody>

                      </tbody>
                  </table>
      </div>
    );
  }
}
export default GetSD;
