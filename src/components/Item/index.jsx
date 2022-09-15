import React, { Component } from 'react'

export default class Item extends Component {

  state = {
    mouse: false,
  }

  // 鼠标移入移除事件
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  // 删除 Item
  deleteTodo = (id) => {
    // 使用 window.confim 获取确认对话框
    const sure = window.confirm("确定删除吗？")
    if (sure) {
      this.props.deleteTodo(id)
    }
  }

  // checkbox 勾选事件
  handleCheckboxChecked = (id) => {
    return (e) => {
      // console.log("item props", this.props);
      // 获取 updateTodos 方法
      const { updateTodos } = this.props
      updateTodos(id, e.target.checked)

      // this.props.updateTodos(id, e.target.checked)
    }
  }

  render() {
    // 获取 todo item 信息
    const { id, name, done } = this.props.todo

    // 获取鼠标状态
    const { mouse } = this.state
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}

      >
        <input type="checkbox" defaultChecked={done}
          onChange={this.handleCheckboxChecked(id)}
        />
        <span>{name}</span>
        <button hidden={!mouse}
          // onClick={(event) => { this.deleteTodo(id) }}
          onClick={() => { this.deleteTodo(id) }}

        >删除1</button>
      </li>
    )
  }
}
