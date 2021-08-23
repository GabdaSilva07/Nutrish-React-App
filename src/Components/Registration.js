import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "./Store/Actions/users";
import { Form, Input, Button, Checkbox } from "antd";

export class Registration extends Component {
  state = {
    // first_name:"",
    user_name: "",
    email: "",
    password: "",
  };

  static propTypes = {
    createUser: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const {  user_name, email, password } = this.state;
    const user = {
      // first_name,
      user_name,
      email,
      password,
    };
    this.props.createUser(user);
    console.log(user);
    this.setState({
      first_name: "",
      user_name: "",
      email: "",
      password: "",
    });
  };

  // onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  render() {
    return (
      <div>
        <h1>Registration Page</h1>
        <form onSubmit={this.onSubmit}>
          {/* <div>
            <label>First Name: </label>
            <input
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={this.state.first_name}
            />
          </div> */}
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="user_name"
              onChange={this.onChange}
              value={this.state.user_name}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="text"
              name="password"
              onChange={this.onChange}
              value={this.state.password}
            />
          </div>
          <div>
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(Registration);
