import React from "react";
import analyticsbackground from "../../../assets/images/analyticsbackground.png";
import mapp from "../../../assets/images/mapp.png"

export default function Information() {
  return (
    <div className="relative w-full h-[550px] mt-5">
      <figure className="w-full h-full">
        <img
          src={analyticsbackground}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 mt-14 pl-80 ">
          <div className=" ">
            <p className="text-[#FF784B] text-xl font-bold mb-4">
              So you can also contact us via the Contact information below:
            </p>
            <p className="text-white text-[14px] mb-2">
              Email: Send enquiries to info@infinityhealth.africa and our team
              will get back to you promptly.
            </p>
            <p className="text-white text-[14px] mb-2">
              Phone or WhatsApp: Feel free to give us a call or send a message
              at +2349161680406. We’re available to chat and answer any
              inquiries you may have.
            </p>
            <p className="text-white text-[14px] mb-2">
              Office Hours: Monday to Friday, 9:00 AM - 5:00 PM (GMT+1)
            </p>
            <p className="text-white text-[14px] mb-2">
              Whether you’re looking for guidance on market entry, regulatory
              compliance, or sales strategy, Infinity Health is here to help you
              navigate <br /> the complexities of the African healthcare landscape.
              Reach out to us today, and let’s work together to unlock your
              healthcare business full potential.
            </p>
            <div className="flex flex-row gap-8">
              <p className="text-[#F2B630] text-[12px]">Lagos,Nigeria</p>
              <p className="text-[#F2B630] text-[12px]">Dakar,Senegal</p>
              <p className="text-[#F2B630] text-[12px]">Johannesburg, South Africa</p>
            </div>
          </div>
          <div className="mt-6">
            <figure>
                <img src={mapp} alt="" width={500} height={500} className="rounded-md" />
            </figure>
          </div>
        </div>
      </figure>
    </div>
  );
}
