import React from "react";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function Layout1() {
  return (
    <div className="flex display-flex flex-grow-1 direction-column">
      <Header />
      <Footer />
    </div>
  );
}

export default Layout1;
