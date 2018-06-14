import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';


class Child extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <h2>Accounts</h2>
            <ul>
              <li><Link to='/netflix'>netflix</Link></li>
              <li><Link to='/zillow-group'>zillow-group</Link></li>
              <li><Link to='/yahoo'>Yahoo</Link></li>
              <li><Link to='/modus-create'>modus-create</Link></li>
            </ul>

            <Route path="/:id" component={Child}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Child;
