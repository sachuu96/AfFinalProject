import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Component/login';
import labtest from './Component/Modules/labType';
import department from './Component/Modules/Departments';
import laboratory from './Component/Modules/Laboratories';
import depmanager from './Component/Manager/DepartmentManager';
import typemanager from './Component/Manager/TypeManager';
import labmanager from './Component/Manager/LabManager';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div >
             <Route path="/login" component={Login}/>
             <Route path="/labtype" component={labtest}/>
             <Route path="/departments" component={department}/>
             <Route path="/laboratories" component={laboratory}/>
          <Route path="/depmanager" component={depmanager}/>
          <Route path="/typemanager" component={typemanager}/>
          <Route path="/labmanager" component={labmanager}/>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
