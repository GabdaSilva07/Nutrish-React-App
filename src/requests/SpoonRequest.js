//const API_KEY = "d45e92126b234747a5f2f8326ee9f70c"
//const API_KEY = "574f824d4c0d269d2d879c8fda041700"
const API_KEY = "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6";


const request = {
  //Fetch By Nutrients
  // fetchNutrientsByCalories:`findByNutrients?apiKey=${API_KEY}&maxCalories=`,
  // fetchNutrientsByFats:`findByNutrients?apiKey=${API_KEY}&maxFat=`,
  // fetchNutrientsByCarb:`findByNutrients?apiKey=${API_KEY}&maxCarbs=`,
  // fetchNutrientsByProtein:`findByNutrients?apiKey=${API_KEY}&maxProtein=`,

  //Fetch By Cuisine
  fetchItalianCuisine: `recipes/search?query=Italian&rapidapi-key=${API_KEY}`,
  fetchAmericanCuisine: `recipes/search?query=American&rapidapi-key=${API_KEY}`,
  fetchGreekCuisine: `recipes/search?query=Greek&rapidapi-key=${API_KEY}`,
  fetchEuropeanCuisine: `recipes/search?query=European&rapidapi-key=${API_KEY}`,
  fetchFrenchCuisine: `recipes/search?query=French&rapidapi-key=${API_KEY}`,
  fetchSouthernCuisine: `recipes/search?query=Southern&rapidapi-key=${API_KEY}`,
  fetchSpanishCuisine: `recipes/search?query=Spanish&rapidapi-key=${API_KEY}`,
  fetchJapaneseCuisine: `recipes/search?query=Japanese&rapidapi-key=${API_KEY}`,

  //Films
  // fetchTrending: `trending/all/day?api_key=${API_KEY}`,
  // fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchLatest: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,

  //Rapid API
};

export default request