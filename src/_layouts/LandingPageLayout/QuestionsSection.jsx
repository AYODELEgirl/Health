import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
// import minus from "../../assets/images/minus.png";

export default function QuestionsSection() {
  const [answer, setAnswer] = useState(null);
  const Question = [
    {
      name: "1. What sets Infinity Health apart from other healthcare companies ",
      ans: ["Infinity Health has a profound understanding of the African healthcare landscape, robust regulatory expertise, and strategic partnerships with local stakeholders. Our team is a key strength, boasting over 50 years of combined experience building healthcare products, delivering services, and supporting regulatory needs across Africa. Our comprehensive approach ensures compliance with regulatory requirements while providing valuable insights and connections to help you succeed in the market."],
    },
    {
      name: "2.What services does Infinity Health provide through Onboard? ",
      ans:[ " Through its Onboard product, Infinity Health provides regulatory compliance guidance, market access strategies, product registration assistance, and support for expanding healthcare services across Africa. These services are designed to help healthcare businesses successfully navigate the African market."],
    },
    {
      name: "3.What are the pricing options for Infinity Health's services?   ",
      ans:[ "We offer flexible pricing packages to accommodate businesses of all sizes. From complimentary business reviews to comprehensive market analysis and sales strategy development, we have a solution to fit your needs and budget. Our pricing is based on your needs, stage of business, and specific regulatory area. Schedule a call to learn more and get the pricing tailored to your requirements.  Schedule a session with our consultant (Add Link to book a call page)."],
    },
    {
      name: "4. Can Infinity Health help with market research and data analysis?",
      ans: [

        "Using Infinity Health for market access provides numerous benefits:",
        "Access to Local Market Insights: Leverage our profound understanding of the African healthcare landscape to gain valuable market insights.",
        "Efficient Resource Allocation: Benefit from our efficient resource allocation to optimize your market entry and growth strategies.",
        "Tailored Expansion Strategies: Receive customized expansion strategies that align with your business goals and the unique regulatory environment.",
        "Connections with Key Stakeholders: Utilize our strategic partnerships with local stakeholders to establish crucial connections and enhance your market presence.",
        "Regulatory Expertise: Navigate regulatory hurdles easily, thanks to our robust regulatory expertise and over 50 years of combined experience in the African health sector.",
        "Comprehensive Support: Our approach ensures you meet all regulatory requirements while providing the support needed to thrive in the market.",
        ] 
    },
    {
      name: "5. How can I get started with Infinity Health's services?",
      ans: ["To get started with Infinity Health's services, simply sign up on our platform and create a request to receive a project proposal. Follow our streamlined process to prepare, submit, and track your applications with our support, ensuring successful market entry and compliance. For more information, contact us at registrations@infinityhealth.africa or +234 916 168 0406."],
    },
    {
      name: "6. Can Infinity Health help with market research and data analysis?",
      ans: ["Infinity Health offers market research and data analysis services to provide valuable insights into market trends, the competitive landscape, and customer needs. This information enables you to make informed decisions and develop effective market entry and expansion strategies."],
    }
   

  ];
  return (
    <div className="mb-20 mt-28">
      <div className="flex flex-col items-center justify-center  ">
        <p className="text-red-500 text-[12px] mb-11">FAQ</p>
        <p className="text-[25px] font-bold mb-5">Frequently asked questions</p>
        <p className="text-[15px] text-[#757575] text-center">
          Answers to questions you may have. We're here to help you make an{" "}
          <br className="hidden md:block"/> informed decision
        </p>
      </div>
      <div className="flex items-start px-16 gap-10 flex-col lg:flex-row pt-8">
      <div className="grid grid-cols-1 lg:w-1/2  w-full gap-10">
        {Question.slice(0,3).map((d, index) => {
          return (
            <div className="gap-40  border-solid border-2 border-gainsboro-100 p-5 rounded-lg cursor-pointer" onClick={() => setAnswer(answer === index ? !index : index)}>
              <div className="flex justify-between gap-5">
                <h2 className="text-[16px] font-medium pb-3">{d.name}</h2>
                <AiOutlineDown
                  style={{ cursor: "pointer" }}
                  size={19}
                  // onClick={() => setAnswer(answer === index ? !index : index)}
                />
              </div>
              {answer === index && (
                d.ans?.map((item) => {
                  return (
                    <h2  className=" leading-6 w-[80%] text-[15px] mb-4 text-[#667085]">{item}</h2>
                  )
                })
              )}
            </div>
          );
        })}
      </div>

      <div className=" grid grid-cols-1 gap-10 lg:w-1/2 w-full">
        {Question.slice(3,6).map((d, index) => {
          return (
            <div className="gap-40  border-solid border-2 border-gainsboro-100 p-5 rounded-lg cursor-pointer" onClick={() => setAnswer(d.name)}>
              <div className="flex justify-between gap-5">
                <h2 className="text-[16px] font-medium pb-3">{d.name}</h2>
                <AiOutlineDown
                  style={{ cursor: "pointer" }}
                  size={19}
                  onClick={() => setAnswer(d.name)}
                />
              </div>
              {answer === d.name && (
                d.ans?.map((item) => {
                  return (
                    <h2  className=" leading-6 w-[80%] text-[15px] mb-4 text-[#667085]">{item}</h2>
                  )
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}
