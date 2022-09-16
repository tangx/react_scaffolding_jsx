# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Github Search 案例相关知识点

使用 PubSub https://github.com/mroderick/PubSubJS 进行消息订阅， 实现组件间的消息通知。

**注意**: 消息订阅函数， 需要放在 `componentDidMount` 中提前挂载。

```jsx
  componentDidMount() {
    this.token = PubSub.subscribe('My_Topic', this.updateState)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
```