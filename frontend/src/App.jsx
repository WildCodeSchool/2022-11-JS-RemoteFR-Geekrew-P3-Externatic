import { Routes, Route } from "react-router-dom";
import Layout1 from "./layouts/Layout1";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
