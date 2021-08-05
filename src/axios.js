import axios from "axios";

const instance = axios.create({
  baseURL: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "x-rapidapi-key": "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
});

export default instance;
