import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="bg-white scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
