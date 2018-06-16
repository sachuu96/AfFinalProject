import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import SampleDetails from './components/SampleDetails';
import AddTestResults_PatientDetails from './components/AddTestResults_PatientDetails';
//import ViewSampleDetails from './components/ViewSampleDetails';
import ViewSampleDetailsParent from './components/ViewSampleDetailsParent';
import Report from './components/Report';
import TestResults_PatientDetails from './components/TestResult_PatientDetails';
import ParentTr from './components/ParentTr';

//toin
import labtestN from './Component/LTParent';
import labsample from './Component/LSParent';
import samplecenter from './Component/SCParent';

//ramesh
import Login from './Component3/login';
import labtest from './Component3/Modules/labType';
import department from './Component3/Modules/Departments';
import laboratory from './Component3/Modules/Laboratories';
import depmanager from './Component3/Manager/DepartmentManager';
import typemanager from './Component3/Manager/TypeManager';
import labmanager from './Component3/Manager/LabManager';

//nethu
import testnames from './Component8/Modules/TestNames';
import testcategories from './Component8/Modules/TestCategories';
import testsubcategories from './Component8/Modules/TestSubCategories';
import testcategoriesmanager from './Component8/Manager/TestCategoriesManager';
import testsubcategoriesmanager from './Component8/Manager/TestSubCategoriesManager';
import testnameeditor from './Component8/EDIT/TestNamesEditor';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Route path="/labs/test_request" component={ParentTr}/>
          <Route path="/labs/add_sample_details" component={SampleDetails}/>
          <Route path="/labs/add_test_results_p_details" component={TestResults_PatientDetails}/>
          <Route path="/labs/view_sample_details/" component={ViewSampleDetailsParent}/>
          <Route path="/labs/report" component={Report}/>


            <Route path="/labtest" component={labtestN}/>
            <Route path="/labsample" component={labsample}/>
            <Route path="/samplecenter" component={samplecenter}/>


            <Route path="/" component={Login} exact/>
            <Route path="/labtype" component={labtest}/>
            <Route path="/departments" component={department}/>
            <Route path="/laboratories" component={laboratory}/>
            <Route path="/depmanager" component={depmanager}/>
            <Route path="/typemanager" component={typemanager}/>
            <Route path="/labmanager" component={labmanager}/>

            <Route path="/testnames/" component={testnames}/>
            <Route path="/testcategories/" component={testcategories}/>
            <Route path ="/testsubcategories/" component ={testsubcategories}/>
            <Route path = "/testcategoriesmanager/" component ={testcategoriesmanager}/>
            <Route path = "/testsubcategoriesmanager/" component ={testsubcategoriesmanager  }/>
            <Route path = "/testnameeditor/" component ={testnameeditor}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
