
// 引入 connect 用于连接 UI 与 redux 组件
import { connect } from 'react-redux'

import React, { Component } from 'react'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../redux/actions/count'



/** 定义 Count UI， 且不导出 */
class Count extends Component {

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
        <h2>Count 组件，当前求和值为： {this.props.count}</h2>
        <h3>下面的 People 组件总人数为: {this.props.peopleCount} </h3>
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


/** 定义 Count Container */
function mapStateToProps(state) {
  return {
    count: state.count,
    peopleCount: state.people.length,
  }
}


/** dispatchProps 可以简单写成一个 object 对象。 如下。
 *    1. action 函数不用带参数签名。
 *    2. 不用专门使用 dispatch 包裹函数。
 */
const dispatchProps = {
  add: createIncrementAction,
  asyncAdd: createIncrementAsyncAction
}

/**
 * connect 可以传递两个函数， 且必须为函数
 * export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
 */
export default connect(mapStateToProps, dispatchProps)(Count)