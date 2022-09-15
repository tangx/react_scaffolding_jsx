import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

export default class App extends Component {


  state = {
    todos: [
      { id: '001', name: "吃饭", done: true },
      { id: '002', name: "睡觉", done: false },
      { id: '003', name: "吃饭", done: false },
      { id: '004', name: "逛街", done: true },
    ]
  }

  updateTodos = (id, checked) => {
    // console.log(id, checked);

    const { todos } = this.state

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // 使用 ES6 语法「复制对象字面量， 并修改某字段」
        return { ...todo, done: checked }
      }
      return todo
    })

    this.setState({ todos: newTodos })
  }


  deleteTodo = (id) => {
    const { todos } = this.state

    const newTodos = todos.filter((item) => {
      return item.id !== id
    })

    this.setState({ todos: newTodos })
  }

  addItem = (todoObj) => {
    // console.log("App:", data);

    // // 获取当前时间戳
    // const ts = new Date().getTime().toString()
    // const todo = { id: ts, name: todoObj, done: false }

    this.setState(
      {
        // 在最前面增加 todo item
        todos: [todoObj, ...this.state.todos]
      },
    )


  }

  render() {
    // console.log(this.state);
    const { todos } = this.state
    return (
      <div className='App'>
        <span>TodoList</span>
        <Header addItem={this.addItem} />
        <List todos={todos}
          updateTodos={this.updateTodos}
          deleteTodo={this.deleteTodo}
        />
        <Footer />
      </div>
    )
  }
}


