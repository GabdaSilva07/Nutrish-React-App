import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import "./Banner.css";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchRandomRecipe);
      setBanner(requests.data.recipes[0]);
      console.log(requests);
      return requests;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  console.log(banner);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://spoonacular.com/recipeImages/${banner?.id}-556x370.jpg")`,
        backgroundPosition: "centre centre",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {banner?.title || banner?.name || banner?.original_name}
        </h1>
        <div
          className="banner_description"
          dangerouslySetInnerHTML={{ __html: truncate(banner?.summary, 300) }}
        ></div>
      </div>

      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
