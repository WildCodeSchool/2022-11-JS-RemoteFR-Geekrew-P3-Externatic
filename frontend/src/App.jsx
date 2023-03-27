import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Registration from "./pages/Registration";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import OfferDetails from "./components/OfferDetails";
import RegistrationCandidate from "./pages/RegistrationCandidate";
import RegistrationCompany from "./pages/RegistrationCompany";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { useCurrentUserContext } from "./contexts/CurrentUserContext";
import CandidateProfile from "./pages/CandidateProfile";
import Candidacies from "./pages/Candidacies";

function App() {
  const { user } = useCurrentUserContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Logout" element={<Logout />} />
          <Route
            path="/Registration-candidate"
            element={<RegistrationCandidate />}
          />
          <Route
            path="/Registration-company"
            element={<RegistrationCompany />}
          />
          <Route path="/Candidate-Profile" element={<CandidateProfile />} />
          <Route path="/OfferDetails/:jobId" element={<OfferDetails />} />
          <Route path="/Candidacies/:candidateId" element={<Candidacies />} />
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
