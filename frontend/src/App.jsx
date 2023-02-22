import { Routes, Route } from "react-router-dom";
import Layout1 from "./layouts/Layout1";
import Home from "./pages/Home";
import SignInCandidate from "./pages/SignInCandidate";
import SignInCompany from "./pages/SignInCompany";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<Home />} />
          <Route path="/SignInCandidate" element={<SignInCandidate />} />
          <Route path="/SignInCompany" element={<SignInCompany />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
