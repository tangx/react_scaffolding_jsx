import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { todo } = this.props
    return (
      <li>
        <input type="checkbox" defaultChecked={todo.done} />
        <span>{todo.name}</span>
        <button>删除</button>
      </li>
    )
  }
}
