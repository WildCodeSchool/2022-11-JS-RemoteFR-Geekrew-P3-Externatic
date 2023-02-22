import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInCandidate from "./pages/SignInCandidate";
import SignInCompany from "./pages/SignInCompany";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignInCandidate" element={<SignInCandidate />} />
        <Route path="/SignInCompany" element={<SignInCompany />} />
      </Routes>
    </div>
  );
}

export default App;
