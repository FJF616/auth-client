import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUp = e => {
    const { username, password } = this.state;
    axios
      .post('http://localhost:3000/users', { username, password })
      .then(res => {
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err, 'error posting to users');
      });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.username}
          placeholder="username"
          name="username"
        />
        <input
          type="password"
          onChange={this.handleInputChange}
          value={this.state.password}
          placeholder="password"
          name="password"
        />
        <button onClick={this.handleSignUp} type="button">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUp;
