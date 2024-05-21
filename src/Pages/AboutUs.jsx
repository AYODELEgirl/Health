import React from 'react'
import Background from '../_layouts/LandingPageLayout/AboutUs/Background'
import WhoWeAre from '../_layouts/LandingPageLayout/AboutUs/WhoWeAre'
import Vision from '../_layouts/LandingPageLayout/AboutUs/Vision'
import VideoSection from '../_layouts/LandingPageLayout/AboutUs/VideoSection'

export default function AboutUs() {
  return (
    <div className=" max-w-screen h-screen overflow-x-hidden">
      <Background />
      <VideoSection />
      <WhoWeAre />
      <Vision />
    </div>
  )
}
