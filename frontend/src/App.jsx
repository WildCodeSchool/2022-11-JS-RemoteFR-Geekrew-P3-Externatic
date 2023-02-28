import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SignInCandidate from "./pages/SignInCandidate";
import SignInCompany from "./pages/SignInCompany";

import "./App.css";
import RegistrationCandidate from "./pages/RegistrationCandidate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/SignInCandidate" element={<SignInCandidate />} />
          <Route path="/SignInCompany" element={<SignInCompany />} />
          <Route
            path="/RegistrationCandidate"
            element={<RegistrationCandidate />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
