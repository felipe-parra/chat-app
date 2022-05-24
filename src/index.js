import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const WithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const WithRouter = () => (
  <BrowserRouter>
    <WithStore />
  </BrowserRouter>
);

ReactDOM.render(
  <WithRouter />,
  document.getElementById("root")
);
