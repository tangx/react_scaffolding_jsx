import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Count from './containers/Count';
// import Count from './components/Count';
import store from './redux/store';


export default class App extends Component {

  render() {

    return (
      <div className='App'>
        <Count store={store} />
      </div>
    )
  }
}


