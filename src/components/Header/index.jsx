import React, { Component } from 'react'
import { nanoid } from 'nanoid'; // yarn add nanoid

export default class Header extends Component {

  handleKeyup = (event) => {
    // enter keycode=13
    const { keyCode, target } = event
    if (keyCode !== 13) return

    // 获取输入数据
    const todoName = target.value
    if (todoName.trim() === '') {
      console.warn("todo data is null");
      return
    }
    // console.log(data);

    // 通过函数调用反向给父组件 App 传递数据
    const todoObj = {
      id: nanoid(),
      name: todoName,
      done: false,
    }
    this.props.addItem(todoObj)

    // 清空 input 输入框
    target.value = ""
  }

  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyup}
          type="text"
          placeholder='输入任务，回车添加' />
      </div>
    )
  }
}
