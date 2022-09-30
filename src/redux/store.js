
// 该文件专门用于暴露一个 store 对象， 整个应用只有一个 store 对象

// 引入 redux 核心组件，  创建 store 
// import { configureStore } from 'redux'
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'


// 引入为 count 组件服务的 reducer
import countReducer from './reducers/count'


/** 合并 export */
// const store = configureStore()
// export default store

import thunk from 'redux-thunk'
const middlewareEnhancer = applyMiddleware(thunk)

const allReducers = combineReducers({
  count: countReducer
})

export default legacy_createStore(allReducers, middlewareEnhancer)
