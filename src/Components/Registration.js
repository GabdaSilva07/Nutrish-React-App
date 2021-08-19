import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createUser } from "./Store/Actions/users";

export class Registration extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    diet: "",
    intolerance: "",
    favourite1: "",
    favourite2: "",
    favourite3: "",
  };

  static propTypes = {
    createUser: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      surname,
      email,
      password,
      diet,
      intolerance,
      favourite1,
      favourite2,
      favourite3,
    } = this.state;
    const user = {
      name,
      surname,
      email,
      password,
      diet,
      intolerance,
      favourite1,
      favourite2,
      favourite3,
    };
    this.props.createUser(user);
    console.log(user);
    this.setState({
      name: "",
      surname: "",
      email: "",
      password: "",
      diet: "",
      intolerance: "",
      favourite1: "",
      favourite2: "",
      favourite3: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Registration Page</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Surname: </label>
            <input
              type="text"
              name="surname"
              onChange={this.onChange}
              value={this.state.surname}
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
            <label>Diet: </label>
            <input
              type="text"
              name="diet"
              onChange={this.onChange}
              value={this.state.diet}
            />
          </div>
          <div>
            <label>Intolerance: </label>
            <input
              type="text"
              name="intolerance"
              onChange={this.onChange}
              value={this.state.intolerance}
            />
          </div>
          <div>
            <label>Favourite Cuisine 1: </label>
            <input
              type="text"
              name="favourite1"
              onChange={this.onChange}
              value={this.state.favourite1}
            />
          </div>
          <div>
            <label>Favourite Cuisine 2: </label>
            <input
              type="text"
              name="favourite2"
              onChange={this.onChange}
              value={this.state.favourite2}
            />
          </div>
          <div>
            <label>Favourite Cuisine 3: </label>
            <input
              type="text"
              name="favourite3"
              onChange={this.onChange}
              value={this.state.favourite3}
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
