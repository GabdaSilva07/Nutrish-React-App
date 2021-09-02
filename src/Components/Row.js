import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./CSS/Row.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "312x231";
const image_type = "jpg";

function Row({ title, fetchUrl, diet, intolerance }) {
  const [cuisines, setCuisines] = useState([]);

  const auth = useSelector((state) => state.authReducer);

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
    params: {
      query: title,
      diet: diet,
      intolerances: intolerance,
      number: "20",
    },
    headers: {
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6",
    },
  };

  useEffect(() => {
    async function fetchData() {
      if (auth.isAuthenticated) {
        const request = await axios.request(options);
        console.log(request.data.results);
        setCuisines(request.data.results);
        return request;
      } else {
        const request = await axios.get(fetchUrl);
        setCuisines(request.data.results);
        return request;
      }
    }
    fetchData();
  }, [title]);

  //TODO: check to type of image in the url
  // const type = cuisines.map((plate) => plate.imageType)
  // console.log(type)
  console.log(cuisines);
  return (
    <div className="row">
      <h2>{title} Cuisine</h2>
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
