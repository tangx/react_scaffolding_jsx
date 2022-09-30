import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Count from './containers/Count';
import People from './containers/People';
// import store from './redux/store';


export default class App extends Component {

  render() {

    return (
      <div className='App'>
        {/* <Count store={store} /> */}
        <Count />
        <hr />
        <People />
      </div>
    )
  }
}


