import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import Separator from "./Separator";
import "./CSS/RecipeDetail.css";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "./Row";

import {
  Grid,
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const base_url = "https://spoonacular.com/recipeImages/";
const image_size = "636x393";

function RecipeDetail({ match }) {
  const recipeInformationURL = `recipes/${match.params.id}/information`;
  const recipeNutritionURL = `recipes/${match.params.id}/nutritionWidget.json`;
  const similarRecipesURL = `recipes/${match.params.id}/similar`;
  const [recipeInformation, setRecipeInformation] = useState({});
  const [recipeNutrition, setRecipeNutrition] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [bad, setBad] = useState([]);
  const [good, setGood] = useState([]);

  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    async function fetchRecipeInfo() {
      const request = await axios.get(recipeInformationURL);
      // console.log(request.data);
      setRecipeInformation(request.data);
      return request;
    }
    fetchRecipeInfo();
  }, [recipeInformationURL]);

  useEffect(() => {
    async function fetchRecipeNutrition() {
      const request = await axios.get(recipeNutritionURL);
      // console.log(request.data);
      setRecipeNutrition(request.data);
      setBad(request.data.bad);
      // console.log(request.data.bad);
      return request;
    }
    fetchRecipeNutrition();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchBad() {
      const request = await axios.get(recipeNutritionURL);
      setBad(request.data.bad);
      // console.log(request.data.bad);
      return request;
    }
    fetchBad();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchGood() {
      const request = await axios.get(recipeNutritionURL);
      setGood(request.data.good);
      // console.log(request.data.good);
      return request;
    }
    fetchGood();
  }, [recipeNutritionURL]);

  useEffect(() => {
    async function fetchRecipeIngredients() {
      const request = await axios.get(recipeInformationURL);
      setIngredients(request.data.extendedIngredients);
      // console.log(request.data.extendedIngredients);
      return request;
    }
    fetchRecipeIngredients();
  }, [recipeInformationURL]);

  return (
    <Container maxWidth="lg">
      <div className="info">
        <h1 className="title">{recipeInformation.title}</h1>

        <div className="content">
          <img
            className="image"
            key={recipeInformation.id}
            src={`${base_url}${recipeInformation.id}-${image_size}.${recipeInformation.imageType}`}
            alt={recipeInformation.title}
          />
          <Paper elevation={3}>
            <div className="summary">
              <p className="header">Summary</p>
              <p
                className="summaryContent"
                dangerouslySetInnerHTML={{
                  __html: recipeInformation.summary,
                }}
              />
            </div>
          </Paper>
        </div>

        <div className="instructions">
          <Paper elevation={3}>
            <p className="header">Instructions</p>

            <p className="summaryContent">{recipeInformation.instructions}</p>
          </Paper>
        </div>

        <div className="infoRow">
          <div className="nutritionalInfo">
            <Paper elevation={3}>
              <ListGroup>
                <p className="header">Nutritional Information</p>

                {bad.map((nutrients) => (
                  <div className="ingredients">
                    <li key={nutrients.title}>
                      {`${nutrients.title}: ${nutrients.amount}`}
                    </li>
                  </div>
                ))}

                {good.map((nutrients) => (
                  <div className="ingredients">
                    <li key={nutrients.title}>
                      {`${nutrients.title}: ${nutrients.amount}`}
                    </li>
                  </div>
                ))}
              </ListGroup>
            </Paper>
          </div>

          <Paper elevation={3}>
            <p className="header">Ingredients</p>
            <div>
              {ingredients.map((ingredient) => (
                <li className="ingredients" key={ingredient.id}>
                  {ingredient.originalString}
                </li>
              ))}
            </div>
          </Paper>
        </div>
      </div>
    </Container>
  );
}

export default RecipeDetail;
