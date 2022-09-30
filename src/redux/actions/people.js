
import { PEOPLE__ADD_USER } from "../constant"

export function createPeopleAddUserAction(name, age) {
  return {
    type: PEOPLE__ADD_USER,
    data: {
      name: name,
      age: age,
    }
  }
}
