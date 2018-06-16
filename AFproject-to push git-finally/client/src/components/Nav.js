import React, { Component } from 'react';
import LogOut from './logout';


class Nav extends Component {
  render() {
    return (
        <div>
          <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom': '0'}}>
<div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html"> HIS.LK LABORATORY</a>
    </div>

    <ul class="nav navbar-top-links navbar-right">
        <li className="dropdown">
            <a className="dropdown-toggle" href="#">
                <LogOut/>
            </a>

        </li>
    </ul>

    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">

        <li>
        <a href="http://localhost:3000/labs/test_request"><i class="fa fa-dashboard fa-fw"></i> Lab Orders</a>
    </li>
    <li>
    <a href="http://localhost:3000/labtest"><i class="fa fa-dashboard fa-fw"></i> New Lab Test</a>
    </li>
    <li>
    <a href=""><i class="fa fa-bar-chart-o fa-fw"></i> Option Manager<span class="fa arrow"></span></a>
    <ul class="nav nav-second-level">
        <li>
        <a href="http://localhost:3000/testnames">Lab Test Manager</a>
    </li>
    <li>
    <a href="http://localhost:3000/labtype">Laboratory Manager</a>
    </li>
    <li>
    <a href="http://localhost:3000/labsample">Sample Center Manager</a>
    </li>
    </ul>
    </li>
    </ul>
    </div>

    </div>

    </nav>


        </div>
    );
  }
}

export default Nav;
