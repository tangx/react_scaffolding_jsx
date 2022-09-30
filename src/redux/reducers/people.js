
import { PEOPLE__ADD_USER } from '../constant'

// const defaultuser = {
//   name: "zhagnsan",
//   age: 20,
// }
// const initState = [defaultuser]

const initState = []
export default function peopleReducer(preState = initState, action) {
  const { type, data } = action

  switch (type) {
    case PEOPLE__ADD_USER: {
      return [data, ...preState] // 返回数据结构： 数组
    }
    default: {
      return preState
    }
  }
}