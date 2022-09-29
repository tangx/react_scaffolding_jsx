import React, { Component } from 'react'



export default class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    this.props.add(value * 1)
  }

  decrement = () => {
    const { value } = this.selectNumber
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.asyncAdd(value * 1, 500)
  }


  render() {
    return (
      <div>
        <h3>当前求和值为： {this.props.count}</h3>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button onClick={this.increment}>加</button>
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementIfOdd}>当前和为奇数时， 加</button>
        <button onClick={this.incrementAsync}>延时 1秒， 加</button>
      </div >
    )
  }
}
