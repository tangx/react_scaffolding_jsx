import React, { Component } from 'react'
import axios from 'axios';

export default class Search extends Component {

  search = () => {
    const { value } = this.searchInputNode

    axios.get(`https://api.github.com/search/users?per_page=42&page=1&q=${value}`).then(
      (response) => {
        const { items } = response.data
        this.props.updateUser(items)
      }
    ).catch(
      (error) => {
        console.log(error);
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
