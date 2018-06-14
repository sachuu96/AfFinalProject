import React, { Component } from 'react';
import axios from 'axios';
import PropTypes            from 'prop-types';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';


class TestRequest extends Component{
  static get propTypes() {
      return {
          currentPdetails: PropTypes.array,
          testRequests: PropTypes.array
      }
  }

  constructor(props){
    super(props)
    this.state={
      testRequests :[],

   }
//    this.handleClick=this.handleClick.bind(this)
  }
click(hin){

  axios.get('http://localhost:8081/get_specific_p_detail/'+hin).then(function(response){
      console.log(response.data.data);

      this.setState({
        currentPdetails:response.data.data
      });

      console.log(this.state.currentPdetails);

  })
  console.log(hin);

}


componentDidMount(){
  axios.get('http://localhost:8081/getTestReq').then(res=>{
    //console.log(res);
    this.setState({
      testRequests:res.data.data
    });
    console.log(this.state.testRequests);
  })
}

/*
function handleClick(){
  axios.get('http://localhost:8081/get_test_results_p_details').then(res=>{
    //console.log(res);
    this.setState({
      testRequests:res.data.data
    });
    console.log(this.state.testRequests);
  })
}
*/

render(){
  return(
      <div id="wrapper">

        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginbottom: '0'}}>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Digital Pluz</a>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                            </div>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Lab Orders</a>
                        </li>
                        <li>
                            <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> New Lab Test</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Option Manager<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="flot.html">Flot Charts</a>
                                </li>
                                <li>
                                    <a href="morris.html">Morris.js Charts</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>

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
                            view test requests
                        </div>
                        <div className="panel-body">

    <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
        <thead>
            <tr>
                <th>Action</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Request ID</th>
                <th>Patient's HIN</th>
                <th>Test Name</th>
                <th>Request Date</th>
                <th>Due Date</th>
                <th>Request Person</th>
                <th>Comments</th>
            </tr>
        </thead>
        <tbody>
          {this.state.testRequests.map(testRequest=>

            <tr className="odd gradeX">
              <td>
                <p>{testRequest.id}</p>
                <p>{testRequest.HIN}</p>
                <a href="http://localhost:3000/add_sample_details">Add Sample Details</a><br/>
                <a href="http://localhost:3000/add_test_results_p_details">Add Test Results</a><br/>
                <a href="http://localhost:3000/report">View Report</a><br/>
                <a href="http://localhost:3000/view_sample_details">View Sample Details</a><br/>
                <button onClick={(e) => this.click(testRequest.HIN)}>get ids</button>
              </td>
              <td className="center">{testRequest.priority}</td>
              <td className="center">{testRequest.status}</td>
              <td className="center">{testRequest.id}</td>
              <td className="center">{testRequest.HIN}</td>
              <td className="center">{testRequest.testName}</td>
              <td className="center">{testRequest.rDate}</td>
              <td className="center">{testRequest.dDate}</td>
              <td className="center">{testRequest.reqPerson}</td>
              <td className="center">{testRequest.comments}</td>
            </tr>

          )}
        </tbody>
    </table>

    <div className="well">
        <h4>DataTables Usage Information</h4>
        <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
        <a className="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
    </div>
</div>


    </div>
                  </div>
</div>
        </div>
        </div>
  )
}
}
export default TestRequest;
