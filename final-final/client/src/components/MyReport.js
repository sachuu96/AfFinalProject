import React, { Component } from 'react';
import Nav from '../components/Nav';
import axios from 'axios';

class MyReport extends Component {
  constructor(props){
    super(props);
    this.state={
      patient:[],
      allPatient:[]
    };
    //this.report=this.props.report
    this.getSpecificUser=this.getSpecificUser.bind(this);
  }

componentDidMount(){

axios.get('http://localhost:8081/labs/get_test_results_p_details').then(res=>{
  this.setState({
    allPatient:res.data.data
  })
})
}
  getSpecificUser=function(event){
    event.preventDefault();
    const hin=event.target.elements.hin.value;
    axios.get('http://localhost:8081/labs/get_specific_p_detail/'+hin).then(res =>{


      this.setState({
        patient:res.data
      })

      console.log(this.state.patient);
      if(this.state.patient==""){
        alert('No patient. Check the HIN again')
      }

    }).catch(function(err){
      alert('No patient!')
    });
  }




render(){
    return (

      <div>
        <div id="wrapper">
          <Nav/>
          <div id="page-wrapper">
              <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Report</h1>
                    </div>
                </div>


                <div className="row">
                      <div className="col-lg-12">
                          <div className="panel panel-default">
                            <div className="panel-heading">

                            </div>
                              <div className="panel-body">

                                <form onSubmit={this.getSpecificUser.bind(this)} role="form">
                                  <div className="form-group">
                                      <label>Patient's HIN</label>
                                      

                                        <select className="form-control" placeholder="Enter text" name="hin" >
                                          {this.state.allPatient.map(x=>
                                            <option>{x.HIN}</option>
                                          )}
                                        </select>
                                  </div>
                                      <button type="submit" class="btn btn-primary">View Details</button>
                                  </form>

                                <div class="table-responsive">
                                  <table class="table">
                                      <thead>
                                          <tr>

                                              <th>Name</th>

                                              <th>Gender</th>
                                              <th>Test Name</th>
                                              <th>Result</th>

                                          </tr>
                                      </thead>
                                      <tbody>
                                        {
                                          this.state.patient.map(entry => <tr className={"success"}>
                                           <td>{entry.name}</td>
                                           <td>{entry.gender}</td>
                                           <td>{entry.testName}</td>
                                           <td>{entry.result}</td>
                                          </tr>)
                                        }
                                      </tbody>
                                  </table>
                              </div>

                              </div>
                            </div>
                      </div>
                </div>
          </div>
      </div>
</div>
    );
}
}

export default MyReport;
