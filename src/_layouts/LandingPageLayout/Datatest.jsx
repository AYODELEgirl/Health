import { useState } from "react";
import Onboard from "./Onboard";
import Markett from "./Markett"; // your import location could be different
import Launch from "./Launch"; // your import location could be different
// import analyticsbackground from '../../assets/images/analyticsbackground.png'
import analyticsbakground from "../../assets/images/analyticsbackground.png";
import newlogo from "../../assets/images/newlogo.png";

const Datatest = () => {
  const [activeTab, setActiveTab] = useState("Onboard");
  const [activeContent, setActiveContent] = useState(<Onboard />);

  const tabs = [
    {id:1, label: "Onboard", content: <Onboard />, icon:newlogo },
    { id:2,label: "Insights", content: <Markett /> },
    { id:3,label: "Launch Support", content: <Launch /> },
  ];

  const renderContent = () => {
    const activeTabData = tabs.find((tab) => tab.label === activeTab);
    return activeTabData?.content;
  };

  return (
    <section id="data" className="p-4">

      <div className="flex justify-between text-center ">
        {tabs.map((tab) => (
          <div
            style={{
              backgroundImage:activeTab === tab.label && `url(${analyticsbakground})`,

            }}
            key={tab.label}
            className={`border flex justify-center flex-1 p-4 cursor-pointer ${
              activeTab === tab.label ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => {
              setActiveContent(tab.content);
              setActiveTab(tab.label);
            }}
          >
            {tab.id === 1 ? "":tab.label.toUpperCase()}
           {tab.id === 1 && <img src={newlogo} alt="" className="w-15 md:w-auto h-15"/>}
          </div>
        ))}
      </div>
      <div className="mt-4">{activeContent}</div>
    </section>
  );
};

export default Datatest;
