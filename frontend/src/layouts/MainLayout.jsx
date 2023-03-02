import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
