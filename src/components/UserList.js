import React from 'react';
import User from './User';
import getUsers from '../functions/getUsers';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  
  componentWillMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
  }

  render () {
    return (
      <ul>
        {this.state.users.map(u => {
          return (
            <User
              key={u.email}
              name={u.name.first}
              email={u.email}
            />
          );
        })}
      </ul>
    );
  }
}

export default UserList;
