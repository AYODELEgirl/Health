import React from "react";
import abouta from "../../../assets/images/abouta.png";
import bg from "../../../assets/images/brand.png";
import footerlogo from "../../../assets/images/footerlogo.png";

export default function SubscribeSection() {
  return (
    <div>
      <div>
        <div className="flex justify-center p-4">
          <div
            className="bg-[#69BD45] rounded-md mb-5 w-[80%] p-10"
            style={{
              backgroundImage: `url(${bg})`,
              height: "200px",
            }}
          >
            <div>
              <img
                src={footerlogo}
                alt="Footer Logo"
                width={110}
                className="mb-5"
              />
            </div>
            <div className="flex flex-row gap-48">
              <div className="flex flex-col gap-3 mb-3">
                <p className="text-white">Join 2,000 plus subscribers</p>
                <p className="text-white">
                  Stay in the loop with everything you need to know
                </p>
              </div>
              <div>
                <div className="flex flex-row gap-3">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="text-[#757575] text-[12px] bg-white px-36 py-2 border border-gray-300 rounded"
                    style={{
                      paddingLeft: "1rem", // Adjust this value as needed to align the placeholder text
                      paddingRight: "9rem", // Adjust this value as needed to keep overall padding consistent
                    }}
                  />
                  <button className="text-[#69BD45] bg-white p-2 px-5 text-[12px] rounded">
                    Subscribe
                  </button>
                </div>
                <p className="text-white text-[10px] mt-2">
                  We care about your data in our{" "}
                  <span className="underline">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
