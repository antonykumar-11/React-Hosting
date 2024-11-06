import React from "react";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Features from "./Home/Features ";
import Footer from "./Home/Footer";
import FooterBottom from "./Home/FooterBottom";
import Navbar from "./Home/NavBar";
import Projects from "./Home/Projects";
import Resume from "./Home/Resume";
import Testimonial from "./Home/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />

        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
