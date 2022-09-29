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

