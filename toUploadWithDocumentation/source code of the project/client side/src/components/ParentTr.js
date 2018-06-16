import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import Trs from '../components/Trs';
import axios from 'axios';
import AddTestRequestParent from '../components/AddTestRequestParent';
import Nav from '../components/Nav';

class ParentTr extends Component {
  constructor(props) {
         	super(props);
         	this.state = {
         		testRequests: []
         	}
         	this.getAllTestReqs();
     	}

      getAllTestReqs() {
        axios.get('http://localhost:8081/labs/getTestReq').then(res=>{
          //console.log(res);
          this.setState({
            testRequests:res.data.data
          });
          console.log(this.state.testRequests);
        })
    }
/*
  addRequest(request){
    axios.post('http://localhost:8081/addTestReq',
    {
      priority:request.priority,
      status:request.status,
      id:request.id,
      HIN:request.HIN,
      testName:request.testName,
      rDate:request.rDate,
      dDate:request.dDate,
      reqPerson:request.reqPerson,
      comments:request.comments
    }
  ).then(result => {
   			if(result.status == 200) {
   				this.getAllTestReqs();
			}
		}).catch(err => {
			alert(err);
		})
  }
*/
render(){
    return (

      <div>
        <div id="wrapper">
          <Nav/>
          <div id="page-wrapper">
              <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Test Requests</h1>
                    </div>
                </div>


                <div className="row">
                      <div className="col-lg-12">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                                  Add and View Test Requests
                            </div>
                              <div className="panel-body">
                                <AddTestRequestParent/>
                                <Trs testRequests={this.state.testRequests} getAllTestReqs={()=>this.getAllTestReqs()}/>
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

export default ParentTr;
