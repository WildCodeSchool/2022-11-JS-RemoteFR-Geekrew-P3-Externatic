import { Routes, Route } from "react-router-dom";
import RegistrationCandidate from "@pages/RegistrationCandidate";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SignInCandidate from "./pages/SignInCandidate";
import SignInCompany from "./pages/SignInCompany";

import "./App.css";

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
