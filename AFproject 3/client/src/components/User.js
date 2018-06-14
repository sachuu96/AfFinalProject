import React, { Component } from 'react';
import AddUser from '../components/AddUser';
import Users from '../components/Users';
import axios from 'axios';

class User extends Component{
  constructor(props){
    super(props);
    this.state={
      users : []
    }
  }

  addUser(user) {
  axios.post("http://localhost:8081" + '/', {name: user.name}).then(result => {
    if(result.status == 200) {
      //this.getAllUsers();
      alert("added!")
  }
}).catch(err => {
  alert(err);
})
}

  render(){
  return(
    <div>
      <p>This is to add </p>
      <AddUser addUser={user => this.addUser(user)}/>
      <Users users={this.state.users} getAllUsers = {() => this.getAllUsers()}/>
    </div>
  )
}

}

export default User;
