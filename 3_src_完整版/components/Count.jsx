import React, { Component } from 'react'

// 引入 redux 的 store
import store from '../redux/store'

import { createIncrementAction, createDecrementAction } from '../redux/count_action'


export default class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber
    // console.log("value=", value);

    store.dispatch(createIncrementAction(value * 1))
  }

  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }

  incrementIfOdd = () => {
    const count = store.getState()
    if (count % 2 === 0) {
      return
    }

    this.increment()
  }

  incrementAsync = () => {
    setTimeout(() => {
      this.increment()
    }, 1000)
  }

  // // 渲染页面
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }



  render() {
    return (
      <div>
        <h3>当前求和值为： {store.getState()}</h3>
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
