const postsReducer = (state = [], action) => {
  // if (action.type === "FETCH_POSTS") {
  //   return action.payload;
  // }
  // return state;

  // Rules of Reducers
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};

export default postsReducer;
