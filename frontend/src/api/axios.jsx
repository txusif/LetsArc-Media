import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000/backend",
});

export default axios;
