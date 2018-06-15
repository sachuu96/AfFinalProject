import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './dist/css/sb-admin-2.css';
import './vendor/font-awesome/css/font-awesome.min.css';


class login extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
            <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">Please Sign In</h3>
        </div>
        <div class="panel-body">
            <form role="form">
            <fieldset>
            <div class="form-group">
            <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus/>
        </div>
        <div class="form-group">
            <input class="form-control" placeholder="Password" name="password" type="password" value=""/>
            </div>
            <div class="checkbox">
            <label>
            <input name="remember" type="checkbox" value="Remember Me"/>Remember Me
        </label>
        </div>

        <a href="http://localhost:3000/labtype" class="btn btn-lg btn-success btn-block">Login</a>
            </fieldset>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
    );
    }
}

export default login;
