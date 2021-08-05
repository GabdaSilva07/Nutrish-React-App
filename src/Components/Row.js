import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setCuisines(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(cuisines);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rows_poster">
        {cuisines.map((dish) => (
          <img
            key={dish.id}
            className={`row_poster`}
            src={dish.image}
            alt={dish.title}
          />
        ))}
      </div>

      {/* Image*/}
    </div>
  );
}

export default Row;
