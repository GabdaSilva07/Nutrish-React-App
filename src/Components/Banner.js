import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests/SpoonRequest";
import "./Banner.css";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchTrending);
      setBanner(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }

    fetchData();
  }, []);

  function truncate(str, n){

    return str?.length > n ? str.substr(0, n -1) + "..." : str; 
  }

  console.log(banner);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${banner?.backdrop_path}")`,
        backgroundPosition: "centre centre",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{banner?.title || banner?.name || banner?.original_name}</h1>
        <h1 className="banner_description">{truncate(banner?.overview, 200)}</h1>
      </div>

      <div className="banner_fade">

      </div>
    </header>
  );
}

export default Banner;
