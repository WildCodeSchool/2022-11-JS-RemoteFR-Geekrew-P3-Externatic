import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { useUserContext } from "./contexts/UserContext";

function App() {
  const { user } = useUserContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Logout" element={<Logout />} />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
