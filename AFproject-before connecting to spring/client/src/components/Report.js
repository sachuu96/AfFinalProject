import React, { Component } from 'react';
import axios from 'axios';


class Report extends Component {

  constructor(props){
    super(props);
    this.state={
      patient:[]
    };

    this.getSpecificUser=this.getSpecificUser.bind(this);
  }

  getSpecificUser=function(event){
    event.preventDefault();
    const hin=event.target.elements.hin.value;
    axios.get('http://localhost:8081/get_specific_p_detail/'+hin).then(res =>{


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

  render() {
    return (

        <div id="page-wrapper">
          <div className="col-lg-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    generate report
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.getSpecificUser.bind(this)} role="form">
                                      <div className="form-group">
                                          <label>Patient's HIN</label>
                                          <input className="form-control" placeholder="Enter text" name="hin" />
                                      </div>
                                          <button type="submit" class="btn btn-primary">View Details</button>
                                      </form>
                                </div>
                                <div className="panel-footer">

                                </div>
                            </div>
                        </div>
        </div>

    );
  }
}

export default Report;
