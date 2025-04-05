import React from "react";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <GetApp />
      <Footer />
    </div>
  );
}

export default App;
