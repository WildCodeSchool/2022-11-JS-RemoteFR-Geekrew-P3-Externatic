import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
