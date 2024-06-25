import React from 'react'
import call from '../../../assets/images/call.png'

export default function BookHomePage() {
  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${call})`,
          height: "500px",
        }}
        className="w-full bg-cover bg-center relative"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start md:p-16 p-8">
          <p className="font-bold text-[55px] text-white mb-2 whitespace-nowrap">
            Contact Us
          </p>
          <p className="text-white text-[14px] mt-[16px]">
            We'd like to hear from you. You can reach us anytime
          </p>
        </div>
      </div>
    </div>
  )
}
