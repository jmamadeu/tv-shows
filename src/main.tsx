import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { Router } from "~/routes";
import { store } from "~/app/store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
