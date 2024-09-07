// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Header } from "./component/Header";
import { HeroSection } from "./component/Hero";
import { ServicesSection } from "./component/Service";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
// import { Header } from "./component/Header";
// import { HeroSection } from "./component/HeroSection";
// import { ServicesSection } from "./component/ServicesSection";
// import { Footer } from "./component/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Header /> */}
        <Navbar />
        {/* <Header /> */}
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{
  /* <Router>
      <Switch>
        <Route path="/" exact component={Gallery} />
        <Route path="/batches" component={Batches} />
        <Route path="/childrens-photo-session" component={ChildrensPhotoSession} />
        <Route path="/golden-heart-christmas" component={GoldenHeartChristmas} />
        <Route path="/dance-performance" component={DancePerformance} />
      </Switch>
    </Router> */
}
