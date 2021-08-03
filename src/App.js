import "./App.css";
import React from "react";
import Row from "./Components/Row";
import request from "./requests/SpoonRequest";
import Banner from "./Components/Banner";
import "./App.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending" fetchUrl={request.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Now Playing" fetchUrl={request.fetchLatest} />
      <Row title="Upcoming" fetchUrl={request.fetchUpcoming} />
      <Row title="Popular" fetchUrl={request.fetchPopular} />
      {/*<Row title="Italian Cuisine" fetchUrl={request.fetchItalianCuisine}/>
      <Row title="American Cuisine" fetchUrl={request.fetchAmericanCuisine}/>
      <Row title="Greek Cuisine" fetchUrl={request.fetchGreekCuisine}/>
      <Row title="European Cuisine" fetchUrl={request.fetchEuropeanCuisine}/>
      <Row title="French Cuisine" fetchUrl={request.fetchFrenchCuisine}/>
      <Row title="Southern Cuisine" fetchUrl={request.fetchSouthernCuisine}/>
      <Row title="Spanish Cuisine" fetchUrl={request.fetchSpanishCuisine}/>
  <Row title="Japanese Cuisine" fetchUrl={request.fetchJapaneseCuisine}/>*/}
    </div>
  );
}

export default App;