# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## TodoList 案例相关知识点

1. 拆分组件、 实现静态组件。 注意： className 和 style 的写法。

2. 动态初始化列表， 如何确定将数据放在哪个组件的 state 中？
    + 某个组件独立使用： 放在其自身的 state 中。
    + 多个组件共同使用： 放在他们的共同赴组件的 state 中。 （官方称此操作为： 状态提升）

3. 关于父子之间通信：
    1. 父传子： 「父组件」通过 props 向「子组件」直接传递数据。
    2. 子传父： 「父组件」通过 props 向「子组件」传递一个函数。

4. 注意 defaultChecked 和 checked 的区别， 类似的还有 defaultValue 和 value。

5. 状态在哪里， 操作状态的方法就在哪里。

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
