import { useState } from "react";
import Onboard from "./Onboard";
import Markett from "./Markett"; // your import location could be different
import Launch from "./Launch"; // your import location could be different
// import analyticsbackground from '../../assets/images/analyticsbackground.png'
import analyticsbakground from "../../assets/images/analyticsbackground.png";
import newlogo from "../../assets/images/newlogo.png";

const Datatest = ({activeTab="Regulatory Support", setActiveTab}) => {
const isCurrent = localStorage.getItem("current")
console.log(isCurrent);

  const tabs = [
    {id:1, label: "Regulatory Support", content: <Onboard /> },
    { id:2,label: "Insights", content: <Markett /> },
    { id:3,label: "Launch Support", content: <Launch /> },
  ];

  const renderContent = () => {
    const activeTabData = tabs.find((tab) => tab.label === activeTab);
    if (isCurrent === "market") {
      return <Markett/>
    }
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
              setActiveTab(tab.label);
            }}
          >
            {tab.label.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="mt-4">

        {activeTab==='Regulatory Support'&&<Onboard />}
        {activeTab==='Insights'&&<Markett />}
        {activeTab==='Launch Support'&&<Launch />}
      </div>
    </section>
  );
};

export default Datatest;
