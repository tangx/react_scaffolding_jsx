import React, { Component } from 'react'
import Card from '../Card'

export default class List extends Component {
  render() {
    const { users } = this.props
    // console.log(users);
    return (
      <div>

        {
          users.map(
            (user) => {
              // console.log(user.login);

              return (
                <li>
                  <Card key={user.id} user={user} />
                </li>
              )
            }


          )
        }

      </div>
    )
  }
}
