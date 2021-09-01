import { Component, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers, updateUser } from "../Components/Store/Actions/users";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userInfoActionCreator, usersActionCreator } from "./Store/Actions/index";

function UserPage() {
  const user = useSelector((state) => state.UserReducer);
  console.log(user)
  return (
    <div>
      <h2>User Page</h2>
      <div>
        <div key={user.id}>
          <p>{user.diet}</p>
          <p>{user.intolerance}</p>
          <p>{user.favourite1}</p>
          <p>{user.favourite2}</p>
          <p>{user.favourite3}</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
