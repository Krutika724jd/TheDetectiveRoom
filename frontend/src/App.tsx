
import { Route, Routes } from "react-router-dom";
import InvestigationPage from "./pages/Investigation/InvestigationPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/investigation/missing-necklace"
        element={<InvestigationPage />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
    </Routes>
  );
}

export default App;
