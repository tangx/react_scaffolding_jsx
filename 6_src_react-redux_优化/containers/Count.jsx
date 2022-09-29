
// 引入 Count 的 UI 组件
import CountUI from '../components/Count'

/**
 * 通过父组件通过 props 传入
 * 
 * 引入 redux store
import store from '../redux/store'
 */

// 引入 connect 用于连接 UI 与 redux 组件
import { connect } from 'react-redux'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../redux/count_action'

/*
const CountContainer = connect()(CountUI)
export default CountContainer
*/


// 传递状态：
// states 函数的返回值作为状态传递给了 UI 组件
// 返回值必须是一个对象
//   state = store.getState()
function mapStateToProps(state) {
  return {
    count: state
  }
}

// // 传递操作状态的方法：
// // methods 函数传递操作方法。
// //    dispath = store.dispatch
// function mapDispatchToProps(dispatch) {
//   return {
//     add: (data) => {
//       // 通知 redux 执行加法
//       dispatch(createIncrementAction(data))
//     },
//     asyncAdd: (data) => {
//       dispatch(createIncrementAsyncAction(data, 500))
//     }
//   }
// }


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