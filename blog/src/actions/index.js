import jsonplaceholder from "../apis/jsonPlaceHolder";
import _ from "lodash";

// using function to work as an action and then manually using dispatch
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// same for fetching the author
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
