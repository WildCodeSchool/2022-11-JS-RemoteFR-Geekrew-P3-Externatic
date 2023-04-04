/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CompanyContextProvider from "./contexts/CompanyContext";
import CandidateContextProvider from "./contexts/CandidateContext";
import CurrentUserContextProvider from "./contexts/CurrentUserContext";
import OfferContextProvider from "./contexts/CreationOfferContext";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <OfferContextProvider>
      <CompanyContextProvider>
        <CandidateContextProvider>
          <CurrentUserContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CurrentUserContextProvider>
        </CandidateContextProvider>
      </CompanyContextProvider>
    </OfferContextProvider>
  </React.StrictMode>
);
