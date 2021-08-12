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
  const [bad, setBad] = useState([]);
  const [good, setGood] = useState([]);

  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    async function fetchRecipeInfo() {
      const request = await axios.get(recipeInformationURL);
      console.log(request.data);
      setRecipeInformation(request.data);
      return request;
    }
    fetchRecipeInfo();
  }, [recipeInformationURL]);

  useEffect(() => {
    async function fetchRecipeNutrition() {
      const request = await axios.get(recipeNutritionURL);
      console.log(request.data);
      setRecipeNutrition(request.data);
      setBad(request.data.bad);
      console.log(request.data.bad);
      return request;
    }
    fetchRecipeNutrition();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchBad() {
      const request = await axios.get(recipeNutritionURL);
      setBad(request.data.bad);
      console.log(request.data.bad);
      return request;
    }
    fetchBad();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchGood() {
      const request = await axios.get(recipeNutritionURL);
      setGood(request.data.good);
      console.log(request.data.good);
      return request;
    }
    fetchGood();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchRecipeIngredients() {
      const request = await axios.get(recipeInformationURL);
      setIngredients(request.data.extendedIngredients);
      console.log(request.data.extendedIngredients);
      return request;
    }
    fetchRecipeIngredients();
  }, [recipeInformationURL]);

  // useEffect(() => {
  //   async function fetchRecipeInstructions() {
  //     const request = await axios.get(recipeNutritionURL);
  //     setInstructions(request.data.analyzedInstructions);
  //     return request;
  //   }
  //   fetchRecipeInstructions();
  // }, [recipeNutritionURL]);

  //  for (let i = 0; i < instructions.length; i++) {
  //    for (const key in instructions) {
  //       console.log(instructions[i])
  //    }

  //  }

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
          <div>
            {good.map((nutrients) => (
              <div>
                <ul key={nutrients.title}>
                  {`${nutrients.title}: ${nutrients.amount}`}
                </ul>
              </div>
            ))}
          </div>

          <div>
            {bad.map((nutrients) => (
              <div>
                <ul key={nutrients.title}>
                  {`${nutrients.title}: ${nutrients.amount}`}
                </ul>
              </div>
            ))}
          </div>

          {/* <ListGroup.Item>{`Calories: ${recipeNutrition.calories}`}</ListGroup.Item>
          <ListGroup.Item>{`Carbs: ${recipeNutrition.carbs}`}</ListGroup.Item>
          <ListGroup.Item>{`Fats: ${recipeNutrition.fat}`}</ListGroup.Item>
          <ListGroup.Item>{`Protein: ${recipeNutrition.protein}`}</ListGroup.Item> */}
        </ListGroup>
      </div>

      <div>
        <p className="header">Ingredients</p>
        <div>
          {ingredients.map((ingredient) => (
            <li className="ingredients" key={ingredient.id}>
              {ingredient.originalString}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
