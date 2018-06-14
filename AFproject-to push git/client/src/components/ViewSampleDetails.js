import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';
import ViewPatientDetails from '../components/ViewPatientDetails';
import events from 'events';
import Nav from '../components/Nav';

class ViewSampleDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      specimens :[],
      patient:[],
      specimen:[]
    };
    this.getSpecificUser=this.getSpecificUser.bind(this);
  }


componentDidMount(){
  axios.get('http://localhost:8081/view_sample_details').then(res=>{
    //console.log(res);
    this.setState({
      specimens:res.data.data
    });
  //  console.log(this.state.specimens);
  })
}

getSpecificUser=function(event){
  event.preventDefault();
  const hin=event.target.elements.hin.value;
  axios.get('http://localhost:8081/get_specific_p_detail/'+hin).then(res =>{


    this.setState({
      patient:res.data
    })

    console.log(this.state.patient);

  });
}

getOneSampleDetail=function(event){
  event.preventDefault();
  const reqid=event.target.elements.reqid.value;

  axios.get('http://localhost:8081/get_specific_s_detail/'+reqid).then(res=>{
      console.log(res.data.data);
      this.setState({
        specimen:res.data
      })

  }).catch(function(err){
    alert('no details added to that request')
  })

}

  render() {

    return (

      <div id="wrapper">

        <div className='button__container'>

            <table className="table">

                        <thead>
                            <tr >
                                <th>Request ID</th>
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
                          {this.state.specimens.map(specimen=>
                            <tr>
                            <td>{specimen.reqId}</td>
                            <td>{specimen.testType}</td>
                            <td>{specimen.retentionType}</td>
                            <td>{specimen.collectedDate}</td>
                            <td>{specimen.remarks}</td>
                            <td>{specimen.location}</td>
                            <td>{specimen.storedORdestroyed}</td>
                            <td>{specimen.sORdDate}</td>
                            </tr>
                          )}
                        </tbody>

                    </table>


                    <ViewPatientDetails/>
        </div>
        <Nav/>
<div id="page-wrapper">

  <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">View Sample Details</h1>
        </div>
    </div>
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">

            </div>

            <div className="panel-body">
<div className="row">
  <div className="col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Patient Details
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.getSpecificUser.bind(this)} role="form">
                              <div className="form-group">
                                  <label>Patient's HIN</label>
                                  <input className="form-control" placeholder="Enter text" name="hin"/>
                              </div>
                                  <button type="submit" class="btn btn-primary">View Details</button>
                              </form>

                              <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>HIN</th>
                                            <th>Name</th>
                                            <th>DOB</th>
                                            <th>Gender</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                           {
                                             this.state.patient.map(entry => <tr className={"success"}>
                                              <td>{ entry.HIN }</td>
                                              <td>{ entry.name }</td>
                                              <td>{ entry.dob }</td>
                                              <td>{ entry.gender }</td>
                                             </tr>)
                                           }

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="panel-footer">

                        </div>
                    </div>
                </div>


<div className="col-lg-6">
                  <div className="panel panel-primary">
                      <div className="panel-heading">
                           Test Details
                      </div>
                      <div className="panel-body">
                    <form role="form">
                        <div className="form-group">
                            <label>Request ID</label>
                            <input className="form-control" placeholder="Enter text" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input className="form-control" placeholder="Enter text" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Sub Category</label>
                            <input className="form-control" placeholder="Enter text" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Test Name</label>
                            <input className="form-control" placeholder="Enter text" disabled/>
                        </div>
                      </form>
                      </div>
                      <div className="panel-footer">

                      </div>
                  </div>
              </div>
</div>

<div className="col-lg-12">
  <form role="form">
                  <div className="panel panel-primary">

                      <div className="panel-heading">
                          View Sample Specimen Details
                      </div>

                      <div className="panel-body">
                        <form onSubmit={this.getOneSampleDetail.bind(this)} role="form">
                        <div className="form-group">
                            <label>Request ID</label>
                            <input className="form-control" placeholder="Enter text" name="reqid"/>
                        </div>
                        <button type="submit" class="btn btn-primary">View Details</button>
                        </form>

                        <div class="table-responsive">
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th>Request ID</th>
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
                                {
                                  this.state.specimen.map(entry => <tr className={"success"}>
                                   <td>{ entry.reqId }</td>
                                   <td>{ entry.testType }</td>
                                   <td>{ entry.retentionType }</td>
                                   <td>{ entry.collectedDate }</td>
                                   <td>{ entry.remarks }</td>
                                   <td>{ entry.location }</td>
                                   <td>{ entry.storedORdestroyed }</td>
                                   <td>{ entry.sORdDate }</td>
                                  </tr>)
                                }

                              </tbody>
                          </table>
                      </div>
                      </div>
                      <div className="panel-footer">
                        <a href="http://localhost:3000/test_request">
                          <button type="button" className="btn btn-default">Back</button>
                        </a>
                      </div>
                  </div>
                  </form>
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

export default ViewSampleDetails;
