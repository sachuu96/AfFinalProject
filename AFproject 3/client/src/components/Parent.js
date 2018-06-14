import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';
import TestRequest from '../components/TestRequest';


class Parent extends Component {
  render() {
    return (

        <div>
          <TestRequest/>
        </div>

    );
  }
}

export default Parent;
