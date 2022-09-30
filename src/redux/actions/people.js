
import { PEOPLE__ADD_USER } from "../constant"

export function createPeopleAddUserAction(peopleObj) {
  return {
    type: PEOPLE__ADD_USER,
    data: peopleObj
  }
}
