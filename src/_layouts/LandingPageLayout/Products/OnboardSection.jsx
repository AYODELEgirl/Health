import { useState } from "react";
import Onboard from "../../LandingPageLayout/Onboard";
import Markett from "../../LandingPageLayout/Markett"; 
import Launch from "../../LandingPageLayout/Launch"; 
// import analyticsbackground from '../../assets/images/analyticsbackground.png'
import analyticsbakground from "../../../assets/images/analyticsbackground.png";

const OnboardSection = () => {
  const [activeTab, setActiveTab] = useState("Onboard");
  const [activeContent, setActiveContent] = useState(<Onboard />);

  const tabs = [
    { label: "Onboard", content: <Onboard /> },
    { label: "Market Access", content: <Markett /> },
    { label: "Launch Support", content: <Launch /> },
  ];

  const renderContent = () => {
    const activeTabData = tabs.find((tab) => tab.label === activeTab);
    return activeTabData?.content;
  };

  return (
    <section className="p-4">
      <div className="flex justify-between text-center ">
        {tabs.map((tab) => (
          <div
            style={{
              backgroundImage:activeTab === tab.label && `url(${analyticsbakground})`,

            }}
            key={tab.label}
            className={`border flex-1 p-4 cursor-pointer ${
              activeTab === tab.label ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setActiveContent(tab.content);
              setActiveTab(tab.label);
            }}
          >
            {tab.label.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="mt-4">{activeContent}</div>
    </section>
  );
};

export default OnboardSection;
