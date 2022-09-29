# redux demo


## install

```bash
$ yarn add redux
```


## 注意事项

### render 刷新页面

**对于某个组件**

在 [Count.jsx](./src/components/Count.jsx) 中， 通过 store 修改了值， 但是不会引起页面的渲染。
通过 `store.subscribe()` 订阅 store 值之后， 通过 `this.setState({})` 通知 react 重新渲染刷新。


```js
  // 渲染页面
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
```

**对于所有页面**

当然， 当组件越来越多的时候， 单独调用回造成代码冗余

可以在 [index.js](./src/index.js) 中订阅， 刷新整个 App

```js
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 第一次渲染
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 订阅变化渲染
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})
```


## action

1.  同步: action 为 `object{}` 一般对象。
2.  异步: action 为 `function` 函数对象。

store 本身只能处理 **一般对象**。 

```
Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.
```
如果是异步 action（函数）， 则需要使用 **中间件** `redux-thunk` 帮忙处理。

```bash
$ yarn add redux-thunk
```


```js

// store.js
import thunk from 'redux-thunk'
const middlewareEnhancer = applyMiddleware(thunk)

export default legacy_createStore(countReducer, middlewareEnhancer)


// action.js
export function createIncrementAsyncAction(data, timeout) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, timeout);
  }
}
```


## react-redux


```bash
$ yarn add react-redux
```

![](./react-redux%E6%A8%A1%E5%9E%8B%E5%9B%BE.jpg)


1. 明确两个概念：
    1. UI组件： 不能使用任何 redux 的 api， 只负责页面的呈现、交互等。
    2. 容器组件： 负责和 redux 通信， 将结果交给 UI 组件。
2. 如何创建一个容器组件： 使用 react-redux 的 connect 函数。
    1. 如代码

3. 备注： 容器组件中的 store 是通过 props 传递进去的。 而不是直接在容器中直接引用。

```js
// 引入 Count 的 UI 组件
import CountUI from '../components/Count'
// 引入 connect 用于连接 UI 与 redux 组件
import { connect } from 'react-redux'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../redux/count_action'

// 传递状态：
// states 函数的返回值作为状态传递给了 UI 组件
// 返回值必须是一个对象
//   state = store.getState()
function mapStateToProps(state) {
  return {
    count: state
  }
}

// 传递操作状态的方法：
// methods 函数传递操作方法。
//    dispath = store.dispatch
function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      // 通知 redux 执行加法
      dispatch(createIncrementAction(data))
    },
    asyncAdd: (data) => {
      dispatch(createIncrementAsyncAction(data, 500))
    }
  }
}

// connect 可以传递两个函数， 且必须为函数
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
```

### connect 函数传参优化

```js

/** dispatchProps 可以简单写成一个 object 对象。 如下。
 *    1. action 函数不用带参数签名。
 *    2. 不用专门使用 dispatch 包裹函数。
 */
const dispatchProps = {
  add: createIncrementAction,
  asyncAdd: createIncrementAsyncAction
}


// connect 可以传递两个函数， 且必须为函数
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(mapStateToProps, dispatchProps)(CountUI)
```

### 页面渲染优化

使用了 `react-redux` 之后， 不用自己在 `index.js` 中使用 `store.subscribe()` 状态变化。


### 使用 Provider 对 store 的传递优化

使用 Provider 组件后， 其所有 container 类型的子组件都可以收到 `store={store}`。
不用在单独写了。
因此， 通常将 Provider 放在 `index.js` 中， 最上层

```js
// index.js

import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

// 默认
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// 使用 Provider 优化 store 的传递
//  1. 使用 Provider 包裹 App 组件
//  2. 为 Provider 传入 store={store}
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

在子组件中， 

```js
// App.jsx

import Count from './containers/Count';
// import store from './redux/store';



export default class App extends Component {
  render() {
    // Count Container 不在单独传递 store={store}
    return (
      <div className='App'>
        {/* <Count store={store} /> */}
        <Count />
      </div>
    )
  }
}
```

### 文件整合优化

根据实际情况， 不一定非要将 **UI组件** 与 **Container组件** 分开成多个文件。 
也可以 **合并** 成 **一个文件**。 


```js

// 引入依赖
import { connect } from 'react-redux'
import React, { Component } from 'react'


// 定义非内部组件
class CountUI extends Component {
  render() {
    return (
      <div>
        <h3>CountUI</h3>
      </div >
    )
  }
}

// 默认暴露 Container 组件
const Count = connect(mapStateToProps, dispatchProps)(CountUI)
export default Count
```