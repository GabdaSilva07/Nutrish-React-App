import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  const [cuisines, setCuisines] = useState([]);
  //const [loading, setloading] = useState(true)

  useEffect(() => {
    // fetch(axios.get(fetchUrl))
    // .then((response) => response.json())
    // .then((data) => {
    //     setCuisines(data);
    //     setloading(false);

    // });

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setCuisines(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //if (loading) return <h1>LOADING...</h1>

  console.table(cuisines);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rows_poster">
        {cuisines.map((dish) => (
          <img
            key={dish.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? dish.poster_path : dish.backdrop_path
            }`}
            alt={dish.title}
          />
        ))}
      </div>

      {/* Image*/}
    </div>
  );
}

export default Row;
