import { Outlet } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="grow flex flex-col min-h-[calc(100vh_-_72px_-_312px)] md:min-h-[calc(100vh_-_72px_-_172px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
