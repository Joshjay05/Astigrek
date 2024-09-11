import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import { ServicesSection } from "./component/Service";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import Gallery from "./component/Gallery";
import Batches from "./component/Batches";
import AboutUs from "./component/AboutUs";
import FamilySection from "./component/Family";
import Training from "./component/Training";
import Projects from "./component/Projects";
import Center from "./component/Center";
import CenterTwo from "./component/CenterTwo";
import ChildrenGallery from "./component/Children";
import GoldenChristmas from "./component/GoldenChristmas";
import Concert from "./component/Concert";
import YouthGallery from "./component/Youth";
import Childsession from "./component/Childsession";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Persistent Navbar */}
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/family" element={<FamilySection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/center" element={<Center />} />
            <Route path="/centertwo" element={<CenterTwo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/training" element={<Training />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/children" element={<ChildrenGallery />} />
            <Route path="/golden" element={<GoldenChristmas />} />
            <Route path="/dance" element={<Concert />} />
            <Route path="youth" element={<YouthGallery />} />
            <Route path="childrens" element={<Childsession />} />
            {/* Dynamic Routes */}
          </Routes>
        </main>
        {/* Persistent Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
