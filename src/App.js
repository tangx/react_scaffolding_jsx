import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

  state = {
    users: []
  }

  updateUser = (users) => {
    this.setState({ users: users })
  }

  render() {

    return (
      <div className='App'>
        <Search
          updateUser={this.updateUser}
        />
        <List users={this.state.users} />
      </div>
    )
  }
}


