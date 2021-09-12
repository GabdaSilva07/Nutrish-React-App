import axios from "axios";

const instance = axios.create({
  headers: {
    "x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
    "x-rapidapi-key": "a0e011c924msh1b08a2377cf5522p197dabjsn2a1565d101e6",
  },
});

export default instance;
