import axios from "axios";

const instance = axios.create({
  baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/",
});

export default instance;
