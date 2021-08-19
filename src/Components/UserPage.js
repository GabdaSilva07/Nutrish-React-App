import { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, updateUser } from "../Components/Store/Actions/users";

class UserPage extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    getUsers:PropTypes.func.isRequired,

  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Fragment>
        <h2>User Page</h2>
        <div>
          {this.props.users.map((user) => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.surname}</p>
              <p>{user.email}</p>
              <p>{user.diet}</p>
              <p>{user.intolerance}</p>
              <p>{user.favourite1}</p>
              <p>{user.favourite2}</p>
              <p>{user.favourite3}</p>
              <br/>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.UserReducer.users,
});

export default connect(mapStateToProps, { getUsers })(UserPage);
