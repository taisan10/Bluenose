import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Brands from "../components/Brands";
import OurServices from "../components/OurServices";
import Process from "../components/Process";
import WhatWeDo from "../components/WhatWeDo";
import StatsSection from "../components/Stats";
import ContactSection from "../components/Contact.jsx";

function LandingPage() {
  return (
    <div className="bg-black text-white">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Sections */}
      <Home />
      <Brands />
      <OurServices />
      <Process />
      <WhatWeDo />
      <StatsSection/>
      <ContactSection />
    </div>
  );
}

export default LandingPage;
