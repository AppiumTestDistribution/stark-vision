import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarkVisionLandingPage from "./StarkVisionLandingPage";
import HowToUsePage from "./HowToUsePage";
import { ScrollToTop } from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StarkVisionLandingPage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
