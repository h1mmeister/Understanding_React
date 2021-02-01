import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mBx5fZWNG7zLrja7oWK8nGVE4X54tYL3WdzoGN8qWuY",
  },
});
