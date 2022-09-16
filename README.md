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


1. 设计状态时要考虑全面， 例如带有网络请求的组件， 要考虑请求失败的处理方式。
2. ES6小知识点： 结构赋值+重命名

```jsx
let obj = {a:{b:1}} // 初始化一个 obj

const {a}=obj; // 传统结构赋值
const {a:{b}}=obj; // 连续结构赋值
const {a:{b: name_c}}=obj; // 连续结构赋值+重命名

console.log("b=",name_c)

```

3. 消息订阅发布机制
    + 先订阅， 再发布。
    + 适用于任意组件通信。
    + 要在组件中的 `componentWillUnmount()` 勾子中取消订阅
    