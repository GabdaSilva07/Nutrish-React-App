//const API_KEY = "d45e92126b234747a5f2f8326ee9f70c"
//const API_KEY = "574f824d4c0d269d2d879c8fda041700"



const request = {
  //Fetch By Nutrients
  // fetchNutrientsByCalories:`findByNutrients?apiKey=${API_KEY}&maxCalories=`,
  // fetchNutrientsByFats:`findByNutrients?apiKey=${API_KEY}&maxFat=`,
  // fetchNutrientsByCarb:`findByNutrients?apiKey=${API_KEY}&maxCarbs=`,
  // fetchNutrientsByProtein:`findByNutrients?apiKey=${API_KEY}&maxProtein=`,

  //Fetch By Cuisine
  fetchRandomRecipe: `recipes/random?number=1`,
  fetchItalianCuisine: `recipes/search?query=Italian`,
  fetchAmericanCuisine: `recipes/search?query=American`,
  fetchGreekCuisine: `recipes/search?query=Greek`,
  fetchEuropeanCuisine: `recipes/search?query=European`,
  fetchFrenchCuisine: `recipes/search?query=French`,
  fetchSouthernCuisine: `recipes/search?query=Southern`,
  fetchSpanishCuisine: `recipes/search?query=Spanish`,
  fetchJapaneseCuisine: `recipes/search?query=Japanese`,

  //Films
  // fetchTrending: `trending/all/day?api_key=${API_KEY}`,
  // fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchLatest: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,

  //Rapid API
};

export default request