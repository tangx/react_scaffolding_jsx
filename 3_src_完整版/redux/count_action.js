/**
 * 该文件专门为 Count 组件生成 action 对象
 */

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

