import React, { Component } from 'react';

class User extends Component {
	render () {
    return (
      <li>
        {this.props.name.title} - {this.props.email}
      </li>
    );
  }
}

export default User;
