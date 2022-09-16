import React, { Component } from 'react'
import Card from '../Card'
import PubSub from 'pubsub-js'

export default class List extends Component {


  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    errorMessage: '',
  }

  componentDidMount() {
    this.token = PubSub.subscribe('My_Topic', this.updateState)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  updateState = (_, data) => {
    console.log("收到消息", data);
    this.setState(data)
  }


  render() {
    const { users, isFirst, isLoading, errorMessage } = this.state

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
