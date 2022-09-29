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

