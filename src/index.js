import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import WebFont from "webfontloader";

import configureStore from "./store";
import App from "./App";
import "../src/styles/override-styles.less";

WebFont.load({
  google: {
    families: [
      "Oxygen:300,400,700",
      "Roboto:100,300,400,700",
      "Nunito:100,300",
    ],
  },
});

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
