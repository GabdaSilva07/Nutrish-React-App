import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { usersActionCreator } from "./Store/Actions/index";
import Banner from "./Banner";
import Row from "./Row";
import axios from "axios";
// import { method } from "bluebird";
// import { response } from "express";




function HomeAuth() {
  const user = useSelector((state) => state.UserReducer);
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const { getUsers, updateUser, createUser, logoutUser } = bindActionCreators(
    usersActionCreator,
    dispatch
  );

  // const options = {
  //   method: "GET",
  //   url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
  //   params: {
  //     query: user.favourite1,
  //     diet: user.diet,
  //     intolerances: user.intolerance,
  //     number: "10",
  //   },
  //   headers: {
  //     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6",
  //   },
  // };

  // axios.request(options).then((response) => {
  //   console.log(response.data)
  // })

  console.log(user)

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  return (
    <div>
      <Banner />
      <Row
        title={user.favourite1}
        diet={user.diet}
        intolerance={user.intolerance}
      />
      <Row
        title={user.favourite2}
        diet={user.diet}
        intolerance={user.intolerance}
      />
      <Row
        title={user.favourite3}
        diet={user.diet}
        intolerance={user.intolerance}
      />
      <Row
        title={user.favourite4}
        diet={user.diet}
        intolerance={user.intolerance}
      />
      <Row
        title={user.favourite5}
        diet={user.diet}
        intolerance={user.intolerance}
      />
    </div>
  );
}

export default HomeAuth;
