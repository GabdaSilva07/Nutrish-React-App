import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import Separator from "./Separator";
import "./CSS/RecipeDetail.css"
import ListGroup from "react-bootstrap/ListGroup";

const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "312x231";
const image_type = "jpg";

function RecipeDetail({ match }) {
  const recipeInformationURL = `recipes/${match.params.id}/information`;
  const recipeNutritionURL = `recipes/${match.params.id}/nutritionWidget.json`;
  const [recipeInformation, setRecipeInformation] = useState({});
  const [recipeNutrition, setRecipeNutrition] = useState({});

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



  return (
    <div>
      <h1 className="title">{recipeInformation.title}</h1>

      <div className="content">
        <img
          className="image"
          key={recipeInformation.id}
          src={`${base_url}${recipeInformation.id}-${image_size}.${recipeInformation.imageType}`}
          alt={recipeInformation.title}
        />

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
        <p className="summary">Summary</p>
        <p
          className="summaryContent"
          dangerouslySetInnerHTML={{
            __html: recipeInformation.summary,
          }}
        />
      </div>
      <div>
        <p>{recipeInformation.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
