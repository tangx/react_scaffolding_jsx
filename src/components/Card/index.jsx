import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user
    return (

      <div>
        <a href={html_url}>
          <img
            src={avatar_url}
            alt=""
            width={128} height={128} />

          <br />
          <span>{login}</span>
        </a>
      </div>
    )
  }
}
