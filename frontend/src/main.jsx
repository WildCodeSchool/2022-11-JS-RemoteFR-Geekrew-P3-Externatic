import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompanyContextProvider from "./contexts/CompanyContext";
import CurrentUserContextProvider from "./contexts/CurrentUserContext";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CompanyContextProvider>
      <CurrentUserContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CurrentUserContextProvider>
    </CompanyContextProvider>
  </React.StrictMode>
);
