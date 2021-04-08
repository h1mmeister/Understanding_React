import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; // provider component makes the Redux store available to any nested components that need to access the Redux store
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
