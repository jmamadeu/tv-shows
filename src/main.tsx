import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "~/app/store";
import { Home } from "~/pages/home";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
