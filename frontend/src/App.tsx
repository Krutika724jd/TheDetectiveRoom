
import { Route, Routes } from "react-router-dom";
import InvestigationPage from "./pages/Investigation/InvestigationPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/investigation/missing-necklace"
        element={<InvestigationPage />}
      />
    </Routes>
  );
}

export default App;
