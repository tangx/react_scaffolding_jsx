import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {

  publish = (data) => {
    PubSub.publish('My_Topic', data)
  }

  search = () => {
    const { value } = this.searchInputNode
    const { publish } = this
    publish(
      {
        isFirst: false,
        isLoading: true,
        errorMessage: '',
      }
    )

    axios.get(`https://api.github.com/search/users?per_page=42&page=1&q=${value}`).then(
      (response) => {
        // const { items } = response.data
        // this.props.updateUser(items)
        publish(
          {
            users: response.data.items,
            isLoading: false,
          }
        )
      }
    ).catch(
      (error) => {
        console.log(error);
        publish(
          {
            isLoading: false,
            errorMessage: error.message,
          }
        )
      }
    )
  }

  render() {
    return (
      <div>
        <span >Search Github Users</span>
        <br />
        <input type="text"
          ref={(c) => { this.searchInputNode = c }}
        />
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}
