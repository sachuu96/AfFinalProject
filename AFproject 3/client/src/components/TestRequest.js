import React, { Component } from 'react';
import PropTypes 			from "prop-types";
import ViewTestRequest from '../components/ViewTestRequest';

class TestRequest extends Component {

render(){
    return (

      <div>
        <ViewTestRequest getHIN={this.getHIN}/>
      </div>
    );
}
}

export default TestRequest;
