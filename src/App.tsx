import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HowToUsePage from "./HowToUsePage";
import VideosPage from "./VideosPage";
import { ScrollToTop } from "./ScrollToTop";
import StarkVisionLandingPage from "./StarkVisionLandingPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StarkVisionLandingPage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
