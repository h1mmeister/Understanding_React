import axios from "axios";

// Base URL for the API
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
