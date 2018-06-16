import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './dist/css/sb-admin-2.css';
import './vendor/font-awesome/css/font-awesome.min.css';



class logout extends Component {

    render() {
        return (
            <div id='logout'>
                <a href="http://localhost:3000/login"><i className="fa fa-user fa-fw"></i> Log Out</a>
            </div>
        )
    }
}

export default logout;