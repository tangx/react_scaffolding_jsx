/**
 * 该文件专门为 Count 组件生成 action 对象
 */

// import store from './store'

import { INCREAMENT, DECREMENT } from './constant'

export function createIncrementAction(data) {
  return {
    type: INCREAMENT,
    data: data,
  }
}

export const createDecrementAction = data => ({
  type: DECREMENT,
  data: data,
})


// 异步 action， 就是值 action 的值是函数。 
// 异步 action 中一般都会调用同步 action。
export function createIncrementAsyncAction(data, timeout) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, timeout);
  }
}
