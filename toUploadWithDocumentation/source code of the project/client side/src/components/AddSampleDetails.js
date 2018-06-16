import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import Nav from '../components/Nav';
import axios from 'axios';



//const AddSampleDetails =function(props) {
class AddSampleDetails extends Component{
  static get propTypes() {
    return {
      testTypes: PropTypes.array,
      addSpecimen:PropTypes.func,
      getAllUsers:PropTypes.func,
      testRequestIDS:PropTypes.array,
      retentionType:PropTypes.array
    }
  }

  constructor(props) {
      super(props);
      this.user = this.props.user;
      this.addSpecimen=this.props.addSpecimen;
      this.getAllUsers = this.props.getAllUsers;
      this.labLocations=this.props.labLocations;
      this.retentionType=this.props.retentionType;

    //  this.state={
    //    testRequestIDS:[]
    //  }
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }
/*
  componentDidMount(){
    axios.get('http://localhost:8081/getTestReq').then(res=>{
      //console.log(res);
      this.setState({
        testRequestIDS:res.data.data
      });
    //  console.log(this.state.specimens);
    })
  }
  */
/*
  this.setState({
    testTypes:this.props.testTypes,
    addSpecimen:this.props.addSpecimen
  })
*/
render(){
    return (

      <div id="wrapper">
        <Nav/>

      <div id="page-wrapper">
  <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Add Sample Details</h1>
        </div>
    </div>
<div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">

            </div>

            <div className="panel-body">

<div className="col-lg-12">
<form onSubmit={this.addSpecimen} role="form">
                  <div className="panel panel-primary">

                      <div className="panel-heading">
                          Add Sample Specimen Details
                      </div>

                      <div className="panel-body">
                        <div className="form-group">
                            <label>Request ID</label>

                              <select className="form-control" placeholder="Enter text" name="reqId" >
                                {this.props.testRequestIDS.map(testRequestID=>
                                  <option>{testRequestID.id}</option>
                                )}

                              </select>

                        </div>
                        <div className="form-group">



                        </div>
                        <div className="form-group">
                            <label>Retention Type</label>

                              <select className="form-control" placeholder="Enter text" name="retentionType" >
                                {this.props.retentionType.map(OneretentionType=>
                                  <option>{OneretentionType.specimen_Retention_Type}</option>
                                )}

                              </select>
                        </div>
                        <div className="form-group">
                            <label>Collected Date</label>
                            <input className="form-control" placeholder="Enter text" name="collectedDate" />
                        </div>
                        <div className="form-group">
                            <label>Remarks</label>
                              <textarea className="form-control" rows="3" name="remarks"></textarea>
                        </div>

                        <div className="form-group">
                            <label>Location</label>

                              <select className="form-control" placeholder="Enter text" name="location" >
                                {this.props.labLocations.map(labLocation=>
                                  <option>{labLocation.location}</option>
                                )}

                              </select>
                        </div>
                        <div className="form-group">

                                  <div className="radio">
                                      <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="stored" checked name="storedORdestroyed"
                                          /> stored
                                      </label>
                                  </div>
                                  <div className="radio">
                                      <label>
                                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="destroyed" name="storedORdestroyed"
                                          />destroyed
                                      </label>
                                  </div>
                        </div>


                        <div className="form-group">
                            <label>Stored/Destroyed Date</label>
                            <input className="form-control" placeholder="Enter text" name="sORdDate" />
                        </div>

                      </div>
                      <div className="panel-footer">
                        <button type="submit" className="btn btn-default">Add</button>
                        <button type="reset" className="btn btn-default">Reset</button>
                        <a href="http://localhost:3000/labs/test_request">
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

export default AddSampleDetails;
