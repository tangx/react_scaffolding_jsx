/** 
 * 1. 该文件是用于创建一个为 Count 组件服务的 reducer, reducer 的本质就是一个函数
 * 2. reducer 函数可以接到两个参数， 
 *    1. 之前的状态(preState),
 *    2. 动作对象(action)
 * 3. reducer 只处理最基本的事情。
 */

import { INCREAMENT, DECREMENT } from './constant'
const initState = 1

export default function countReducer(preState = initState, action) {

  // if (preState === undefined) {
  //   preState = 0
  // }

  const { type, data } = action

  switch (type) {
    case INCREAMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }

}