import React, { useEffect, useState } from "react";
import Background from "../_layouts/LandingPageLayout/AboutUs/Background";
import WhoWeAre from "../_layouts/LandingPageLayout/AboutUs/WhoWeAre";
import Vision from "../_layouts/LandingPageLayout/AboutUs/Vision";
import VideoSection from "../_layouts/LandingPageLayout/AboutUs/VideoSection";
// import NavBar2 from "../_layouts/LandingPageLayout/NavBar2";
import NavBar3 from "../_layouts/LandingPageLayout/Navbar3";

export default function AboutUs() {
  const [isScrolled, setIsScrolled] = useState(true);

  return (
    <div className=" max-w-screen h-screen overflow-x-hidden">
      <NavBar3 isScrolled={isScrolled} />
      {/* <Background /> */}
      <VideoSection />
      <WhoWeAre />
      <Vision />
    </div>

  
  );
}
