/** 
 * reducers/index.js 专门用于组合所有暴露的 reducer。 
 *    放在 reducers 目录下， 作为入口文件。 统一管理。
 */
import count from './count'
import people from './people'

import { combineReducers } from 'redux'

export default combineReducers(
  {
    count,
    people,
  }
)