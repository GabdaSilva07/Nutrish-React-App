//const API_KEY = "d45e92126b234747a5f2f8326ee9f70c"
const API_KEY = "574f824d4c0d269d2d879c8fda041700"


const request = {
  //Fetch By Nutrients
  // fetchNutrientsByCalories:`findByNutrients?apiKey=${API_KEY}&maxCalories=`,
  // fetchNutrientsByFats:`findByNutrients?apiKey=${API_KEY}&maxFat=`,
  // fetchNutrientsByCarb:`findByNutrients?apiKey=${API_KEY}&maxCarbs=`,
  // fetchNutrientsByProtein:`findByNutrients?apiKey=${API_KEY}&maxProtein=`,

  //Fetch By Cuisine
  //fetchItalianCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=italian`,
  //fetchAmericanCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=american`,
  //fetchGreekCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=greek`,
  //fetchEuropeanCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=european`,
  //fetchFrenchCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=french`,
  //fetchSouthernCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=southern`,
  //fetchSpanishCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=spanish`,
  //fetchJapaneseCuisine:`complexSearch?apiKey=${API_KEY}&cuisine=japanese`,

  //Films
  fetchTrending: `trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatest: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default request