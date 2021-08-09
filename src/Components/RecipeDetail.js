import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import Separator from "./Separator";

function RecipeDetail({ match }) {
  const recipeURL = `recipes/${match.params.id}/information`;
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function fetchRecipe() {
      const request = await axios.get(recipeURL);
      console.log(request.data);
      setRecipe(request.data);
      return request;
    }
    fetchRecipe();
  }, [recipeURL]);

  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  );
}

export default RecipeDetail;
