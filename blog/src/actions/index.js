import axios from "axios";
import jsonplaceholder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get("/posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
