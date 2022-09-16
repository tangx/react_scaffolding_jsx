import React, { Component } from 'react'
import Card from '../Card'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, errorMessage } = this.props

    if (isFirst) {
      return (
        <div>欢迎使用 github 用户搜索</div>
      )
    }

    if (isLoading) {
      return (
        <div>搜索中....</div>
      )
    }

    if (errorMessage) {
      return (
        <div style={{ color: 'red' }}>发生错误: {errorMessage}</div>
      )
    }

    // 返回正常用户
    return (
      <div>
        {
          users.map(
            (user) => {
              return (
                <li key={user.id}>
                  <Card user={user} />
                </li>
              )
            }
          )
        }

      </div>
    )
  }
}
