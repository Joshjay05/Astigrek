import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import { ServicesSection } from "./component/Service";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import Gallery from "./component/Gallery";
import Batches from "./component/Batches";
// import ChildrensPhotoSession from "./pages/ChildrensPhotoSession";
// import GoldenHeartChristmas from "./pages/GoldenHeartChristmas";
// import DancePerformance from "./pages/DancePerformance";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar will be persistent on all pages */}
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/batches" element={<Batches />} />
            {/* <Route
              path="/childrens-photo-session"
              element={<ChildrensPhotoSession />}
            />
            <Route
              path="/golden-heart-christmas"
              element={<GoldenHeartChristmas />}
            />
            <Route path="/dance-performance" element={<DancePerformance />} /> */}
          </Routes>
        </main>
        {/* Footer will be persistent on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
