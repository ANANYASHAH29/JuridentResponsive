import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-white scroll-smooth">
      <Navbar />
      <Outlet />
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
