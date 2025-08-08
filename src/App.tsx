import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HowToUsePage from "./HowToUsePage";
import { ScrollToTop } from "./ScrollToTop";
import StarkVisionLandingPage from "./StarkVisionLandingPage";
import VideosPage from "./VideosPage";

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
