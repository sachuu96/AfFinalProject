import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './dist/css/sb-admin-2.css';
import './vendor/font-awesome/css/font-awesome.min.css';


class login extends Component {

    constructor(props){
        super(props);
        this.state={
            allUsers:[],
        }
        this.getUsers();

    }


    validateLogin(un,pw){
        console.log('in');
            {this.state.allUsers.map(allUsers=> {
                if(un==allUsers.username && pw==allUsers.password){
                    alert('Successfully Logged-in!!');
                    window.location.href='http://localhost:3000/labtype';
                }else{
                    alert('Enter Valid Username and Password');
                }
                }
            )}

    }

    getUsers(){
        fetch('http://localhost:8081/user/' , {
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            return res.json();
        }).then(data =>{
            this.setState({allUsers : data.data});
            //console.log(data.data);
        }).catch(err=>{
            alert('Failed to Load Users:'+err);
        })
        console.log('user get called');
    }

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
            <input class="form-control" id="un" placeholder="username" type="text" required/>
        </div>
        <div class="form-group">
            <input class="form-control" id="pw" placeholder="Password" type="password" required/>
            </div>
            <div class="checkbox">

        </div>

        <button type="button" onClick={()=>{this.validateLogin(document.getElementById('un').value,document.getElementById('pw').value)}} class="btn btn-lg btn-success btn-block">Login</button>
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
