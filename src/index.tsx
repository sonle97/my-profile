import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

import "./assets/styles/index.css";
import { App } from "./app";
import Toast from "./app/components/ui/Toast";

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <App />
      <Toast />
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
