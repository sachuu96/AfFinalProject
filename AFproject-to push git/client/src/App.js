import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import SampleDetails from './components/SampleDetails';
import AddTestResults_PatientDetails from './components/AddTestResults_PatientDetails';
import ViewSampleDetails from './components/ViewSampleDetails';
import Report from './components/Report';
import TestResults_PatientDetails from './components/TestResult_PatientDetails';
import ParentTr from './components/ParentTr';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
          <Route path="/test_request" component={ParentTr}/>
          <Route path="/add_sample_details" component={SampleDetails}/>
          <Route path="/add_test_results_p_details" component={TestResults_PatientDetails}/>
          <Route path="/view_sample_details/" component={ViewSampleDetails}/>
          <Route path="/report" component={Report}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
