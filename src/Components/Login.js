import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    credential: {
      username: "",
      password: "",
    },
  };

  inputChange = (event) => {
    const cred = this.state.credential;
    cred[event.target.name] = event.target.value
    this.setState({credential: cred})
  };
//TODO:Change axios endpoint
   login = (event) => {
    console.log(this.state.credential);
    fetch("http://127.0.0.1:8000/api/auth/", {
      method:"POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.credential),
    }).then( data => data.json())
    .then(
      data => {this.props.userLogin(data.token)}
    ).catch( error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.credential.username}
            onChange={this.inputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.credential.password}
            onChange={this.inputChange}
          />
        </label>
        <br />
        <button onClick={this.login}>Login</button>
        <Link to="/registration">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default Login;
