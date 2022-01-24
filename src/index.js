import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import App from "./components/app/App";

const store = createStore(reducers);
reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
