import React, { Component } from 'react'

export default class Item extends Component {

  state = {
    mouse: false,
  }

  // 函数柯里化
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  render() {
    const { todo } = this.props
    const { mouse } = this.state
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}

      >
        <input type="checkbox" defaultChecked={todo.done} />
        <span>{todo.name}</span>
        <button hidden={!mouse}>删除1</button>
      </li>
    )
  }
}
