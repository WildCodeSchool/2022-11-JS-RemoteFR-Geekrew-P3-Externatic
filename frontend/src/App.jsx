import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import UserContextProvider from "./contexts/UserContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Logout" element={<Logout />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </UserContextProvider>
  );
}

export default App;
