import axios from "axios";

const instance = axios.create({
  baseURL: "https://exercisedb.p.rapidapi.com/exercises/target/",
  headers: {
    "content-type": "application/json",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6",
  },
});

export default instance;