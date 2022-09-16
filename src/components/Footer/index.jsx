import React, { Component } from 'react'

export default class Footer extends Component {


  handleCheckedChange = (event) => {
    console.log(event.target.checked);
    const checked = event.target.checked
    this.props.allTodosChecked(checked)
  }

  render() {

    const { todos } = this.props
    const totalCount = todos.length
    const checkedCount = todos.reduce(
      (pre, todo) => {
        return todo.done ? pre + 1 : pre
      }, 0
    )

    // const isAllChecked = () => {
    //   console.log(totalCount, checkedCount);
    //   return totalCount === checkedCount
    // }
    const isAllChecked = (totalCount != 0 && totalCount === checkedCount)

    return (
      <div>
        <input type="checkbox"
          checked={isAllChecked}
          onChange={this.handleCheckedChange}
        />
        <span>已完成 {checkedCount} / 全部 {totalCount}</span>
        <button onClick={() => { this.props.deleteCheckedTodos() }}
        >删除全部已选事项</button>
      </div>
    )
  }
}
