import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompanyContextProvider from "./contexts/CompanyContext";
import CurrentUserContextProvider from "./contexts/CurrentUserContext";
import CandidateContextProvider from "./contexts/CandidateContext";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CompanyContextProvider>
      <CandidateContextProvider>
        <CurrentUserContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CurrentUserContextProvider>
      </CandidateContextProvider>
    </CompanyContextProvider>
  </React.StrictMode>
);
