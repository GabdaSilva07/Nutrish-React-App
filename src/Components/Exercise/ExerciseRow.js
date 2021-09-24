import React, { useState, useEffect, Component } from "react";
import axiosExercise from "./axiosExercise";
import PropTypes from "prop-types";
import "../CSS/ExerciseRow.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ExerciseRow({ exerciseSearch }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      const request = await axiosExercise.get(exerciseSearch);
      setPosts(request.data);
    }

    if (typeof exerciseSearch !== "undefined" || exerciseSearch !== "") {
      fetchExercises();
    }
  }, [exerciseSearch]);

  console.log(posts);
  return (
    <div className="row">
      <div className="rows_poster">
        {posts.map((item) => (
          <figure className="position-relative">
            <img
              key={item.id}
              className={`poster`}
              src={item.gifUrl}
              alt={item.name}
            />
            <figcaption className="figcaption">
              {item.name}
              <br />
              {item.target}
              <br />
              {item.bodyPart}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

ExerciseRow.propTypes = {
  exerciseSearch: PropTypes.string,
};

export default ExerciseRow;

// <ImageListItem key={item.img}>
//   <img src={item.gifUrl} alt={item.name} loading="lazy" />
//   <ImageListItemBar
//     title={item.name.charAt(0).toUpperCase() + item.name.substring(1)}
//     subtitle={
//       item.target.charAt(0).toUpperCase() + item.target.substring(1)
//     }
//   />
// </ImageListItem>
