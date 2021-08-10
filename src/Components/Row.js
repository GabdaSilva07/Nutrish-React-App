import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./CSS/Row.css";
import { Link } from "react-router-dom";

const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "312x231";
const image_type = "jpg";
function Row({ title, fetchUrl, isLargeRow }) {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCuisines(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //TODO: check to type of image in the url
  // const type = cuisines.map((plate) => plate.imageType)
  // console.log(type)


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rows_poster">
        {cuisines.map((dish) => (
          <Link
            className="rows_posterLinks"
            to={`/recipe/${dish.id}`}
            key={dish.id}
            
          >
            <img
              key={dish.id}
              className={`row_poster`}
              src={`${base_url}${dish.id}-${image_size}.${image_type}`}
              alt={dish.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
