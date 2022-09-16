import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import Search from './components/Search'
import List from './components/List'


export default class App extends Component {

  render() {

    return (
      <div className='App'>

        <hr />
        <Search
          updateUser={this.updateUser}
          updateState={this.updateState}
        />
        {/* 把 state 中的所有参数传递 */}
        <List {...this.state} />
      </div>
    )
  }
}


