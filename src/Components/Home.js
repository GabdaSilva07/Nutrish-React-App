import React from "react";
import Row from "./Row";
import request from "../requests/SpoonRequest";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Banner />
      <Row title="Italian Cuisine" fetchUrl={request.fetchItalianCuisine} />
      <Row title="American Cuisine" fetchUrl={request.fetchAmericanCuisine} />
      <Row title="Greek Cuisine" fetchUrl={request.fetchGreekCuisine} />
      <Row title="European Cuisine" fetchUrl={request.fetchEuropeanCuisine} />
      <Row title="French Cuisine" fetchUrl={request.fetchFrenchCuisine} />
      <Row title="Southern Cuisine" fetchUrl={request.fetchSouthernCuisine} />
      <Row title="Spanish Cuisine" fetchUrl={request.fetchSpanishCuisine} />
    </div>
  );
}

export default Home;
