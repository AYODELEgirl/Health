import EnablementSection from "../_layouts/LandingPageLayout/EnablementSection";
import HomePageLayout from "../_layouts/LandingPageLayout/HomePageLayout";
import PictureAndTextGrid from "../_layouts/LandingPageLayout/PictureAndTextGrid";
import PublicationSection from "../_layouts/LandingPageLayout/PublicationSection";
import QuestionsSection from "../_layouts/LandingPageLayout/QuestionsSection";
import CommitmentSection from "../_layouts/LandingPageLayout/commitmentSection";
import DataAndAnalytics from "../_layouts/LandingPageLayout/dataAndAnalytics";
// import FooterSection from "../_layouts/LandingPageLayout/FooterSection";
import Datatest from "../_layouts/LandingPageLayout/Datatest";
import New from "../_layouts/LandingPageLayout/New";
import FooterSections from "../_layouts/LandingPageLayout/FooterSections";
import { useState } from "react";
// import FooterSection from "../_layouts/LandingPageLayout/footerSection";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("Regulatory Support");

  return (
    <main>
      <HomePageLayout />
      <New />
     <PictureAndTextGrid /> 
     <CommitmentSection />  
      <Datatest activeTab={activeTab} setActiveTab={setActiveTab} /> 
      {/* <DataAndAnalytics /> */}
      <PublicationSection /> 
       <EnablementSection /> 
      <QuestionsSection />
      <FooterSections activeTab={activeTab} setActiveTab={setActiveTab}  />
    </main>
  );
}
