import React from "react";
import Row from "./Row";
import request from "../requests/SpoonRequest";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Banner />
      <Row title="Italian" fetchUrl={request.fetchItalianCuisine} />
      <Row title="American" fetchUrl={request.fetchAmericanCuisine} />
      <Row title="Greek" fetchUrl={request.fetchGreekCuisine} />
      <Row title="European" fetchUrl={request.fetchEuropeanCuisine} />
      <Row title="French" fetchUrl={request.fetchFrenchCuisine} />
      <Row title="Southern" fetchUrl={request.fetchSouthernCuisine} />
      <Row title="Spanish" fetchUrl={request.fetchSpanishCuisine} />
    </div>
  );
}

export default Home;
