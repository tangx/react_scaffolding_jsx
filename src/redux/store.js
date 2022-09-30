
// 该文件专门用于暴露一个 store 对象， 整个应用只有一个 store 对象

// 引入 redux 核心组件，  创建 store 
// import { configureStore } from 'redux'
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'

// 引入 redux 开发者工具， 这是一个插件
import { composeWithDevTools } from 'redux-devtools-extension'


// // 引入为 count 组件服务的 reducer
// import countReducer from './reducers/count'
// import peopleReducer from './reducers/people'

// const allReducers = combineReducers({
//   count: countReducer,
//   people: peopleReducer,
// })

// 不在 store.js 里面管理， 而是通过引入所有 reducers
import reducers from './reducers'

import thunk from 'redux-thunk'
const middlewareEnhancer = applyMiddleware(thunk)

/** 不使用 redux 开发者工具 */
// export default legacy_createStore(allReducers, middlewareEnhancer)

/** 使用 redux 开发者工具， 需要将中间件作为 参数 传递给 composeWithDevTools */
export default legacy_createStore(
  reducers,
  composeWithDevTools(middlewareEnhancer),
)
