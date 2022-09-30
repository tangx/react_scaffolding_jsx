import React from 'react'
import { createRef } from 'react'
import { connect } from 'react-redux'
import { createPeopleAddUserAction } from '../redux/actions/people'

function People(props) {
  const nameNode = createRef()
  const ageNode = createRef()

  const handleBtnAddUser = () => {
    // console.log(nameNode);
    // return

    const name = nameNode.current.value
    const age = ageNode.current.value
    // console.log("@@2", name, age);

    props.addUser(name, age)

    nameNode.current.value = ''
    ageNode.current.value = ''
  }

  return (
    <div>
      <h2>People 组件</h2>
      <h3>上面 Count 组件的和为 = {props.count}</h3>
      <input type="text" placeholder='name' ref={nameNode} />
      <input type="text" placeholder='age' ref={ageNode} />

      <button onClick={handleBtnAddUser}>添加用户</button>

      <h3>用户列表：</h3>
      {
        props.people.map(
          (p) => {
            return (
              <li>姓名: {p.name}, 年龄: {p.age}</li>
            )
          }
        )
      }
    </div>
  )
}


function stateProps(state) {
  return {
    count: state.count,
    people: state.people
  }
}

const dispatchProps = {
  addUser: createPeopleAddUserAction
}

export default connect(stateProps, dispatchProps)(People)