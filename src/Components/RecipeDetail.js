import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import Separator from "./Separator";
import "./CSS/RecipeDetail.css";
import ListGroup from "react-bootstrap/ListGroup";

const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "636x393";

function RecipeDetail({ match }) {
  const recipeInformationURL = `recipes/${match.params.id}/information`;
  const recipeNutritionURL = `recipes/${match.params.id}/nutritionWidget.json`;
  const [recipeInformation, setRecipeInformation] = useState({});
  const [recipeNutrition, setRecipeNutrition] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchRecipeNutrition() {
      const request = await axios.get(recipeInformationURL);
      console.log(request.data);
      setRecipeInformation(request.data);
      return request;
    }
    fetchRecipeNutrition();
  }, [recipeInformationURL]);

  useEffect(() => {
    async function fetchRecipeNutrition() {
      const request = await axios.get(recipeNutritionURL);
      console.log(request.data);
      setRecipeNutrition(request.data);
      return request;
    }
    fetchRecipeNutrition();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchRecipeNutrition() {
      const request = await axios.get(recipeInformationURL);
      setIngredients(request.data.extendedIngredients);
      console.log(request.data.extendedIngredients);
      return request;
    }
    fetchRecipeNutrition();
  }, [recipeInformationURL]);

  return (
    <div className="info">
      <h1 className="title">{recipeInformation.title}</h1>

      <div className="content">
        <img
          className="image"
          key={recipeInformation.id}
          src={`${base_url}${recipeInformation.id}-${image_size}.${recipeInformation.imageType}`}
          alt={recipeInformation.title}
        />
        <div className="summary">
          <p className="header">Summary</p>
          <p
            className="summaryContent"
            dangerouslySetInnerHTML={{
              __html: recipeInformation.summary,
            }}
          />
        </div>
      </div>

      <div className="instructions">
        <p className="header">Instructions</p>
        <p>{recipeInformation.instructions}</p>
      </div>

      <div>
        <ListGroup className="nutritionalInfo">
          <ListGroup.Item className="header">
            Nutritional Information
          </ListGroup.Item>
          <ListGroup.Item>{`Calories: ${recipeNutrition.calories}`}</ListGroup.Item>
          <ListGroup.Item>{`Carbs: ${recipeNutrition.carbs}`}</ListGroup.Item>
          <ListGroup.Item>{`Fats: ${recipeNutrition.fat}`}</ListGroup.Item>
          <ListGroup.Item>{`Protein: ${recipeNutrition.protein}`}</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <p className="header">Ingredients</p>
        <div>
          {ingredients.map((ingredient) => (
            <li className="ingredients">
              {ingredient.name}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
