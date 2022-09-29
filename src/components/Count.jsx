import React, { Component } from 'react'

// 引入 redux 的 store
import store from '../redux/store'

export default class Count extends Component {
  render() {
    return (
      <div>
        <h3>当前求和值为： {store.getState()}</h3>
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button>加</button>
        <button>减</button>
        <button>当前和为奇数时， 加</button>
        <button>延时 1秒， 加</button>
      </div>
    )
  }
}
