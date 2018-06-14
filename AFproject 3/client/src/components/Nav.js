import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
        <div>
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
        </div>
    );
  }
}

export default Nav;
