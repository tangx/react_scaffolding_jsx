import Footer from './Footer'
import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'

export default class index extends Component {
  state = {
    total: 0,
    corrent: 0,
    left: 3,
    right: 0,
    answer: 0,
  }


  render() {
    return (
      <div>
        <h1>计算器</h1>
        <Header />
        <Body {...this.state} />
        <Footer {...this.state} />
      </div>
    )
  }
}
