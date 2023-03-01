import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import SignInCandidate from "./pages/SignInCandidate";
import SignInCompany from "./pages/SignInCompany";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/SignInCandidate" element={<SignInCandidate />} />
          <Route path="/SignInCompany" element={<SignInCompany />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
