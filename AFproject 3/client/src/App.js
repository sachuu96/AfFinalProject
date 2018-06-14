import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import TestRequest from './components/TestRequest';
import SampleDetails from './components/SampleDetails';
import AddTestResults_PatientDetails from './components/AddTestResults_PatientDetails';
import ViewSampleDetails from './components/ViewSampleDetails';
import Report from './components/Report';
import User from './components/User';
import GetSD from './components/GetSD';
import TestResults_PatientDetails from './components/TestResult_PatientDetails';
import ParentTr from './components/ParentTr';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={User} exact/>
          <Route path="/test_request" component={ParentTr}/>
          <Route path="/all_test_request" component={TestRequest}/>
          <Route path="/add_sample_details" component={SampleDetails}/>
          <Route path="/add_test_results_p_details" component={TestResults_PatientDetails}/>
          <Route path="/view_sample_details/" component={ViewSampleDetails}/>
          <Route path="/report" component={Report}/>
          <Route path="/Home" component={Home}/>
          <Route path="/get" component={GetSD}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
