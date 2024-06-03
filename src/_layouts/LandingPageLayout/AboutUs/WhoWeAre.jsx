import React from "react";

export default function WhoWeAre() {
  return (
    <div className="bg-[#F5FFF0] flex lg:flex-row flex-col gap-10 lg:h-[480px] p-10">
      <div className=" flex flex-col gap-10">
        <div className="">
          <p className="font-bold text-[27px] mb-5">Who we are</p>
          <p>
            At Infinity Health, we're passionate about transforming access
            across Africa. Our mission is simple yet ambitious: to improve
            healthcare penetration across the continent by empowering businesses
            with actionable insights and scalable solutions. Leveraging our deep
            understanding of the unique challenges and opportunities in African
            healthcare markets, we provide valuable insights that drive positive
            change and foster sustainable growth.
          </p>
        </div>
        <div className="">
          <p className="font-semibold text-[17px]">Local Knowledge,Global impact</p>
          <p>
            We understand the complexities of African healthcare systems. Our
            team of seasoned experts brings a wealth of experience and local
            knowledge to the table. This allows us to provide actionable data
            and strategies specifically tailored to the African context.
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col  gap-8">
        <div className="">
          <p className="font-semibold text-[17px]">More than Data, we're a partner</p>
          <p>
            We go beyond simply offering data. Our comprehensive product suite
            and services cater to various needs, from market entry and
            regulatory compliance to sales strategy and data analysis. We’re
            here to support your healthcare business every step of the way,
            ensuring you reach your full potential in Africa.
          </p>
        </div>
        <div className="">
          <p className="font-semibold text-[17px]">Join us in shaping a healthier future</p>
          <p className="mb-4">
              Together, we can build a future where quality healthcare is
            accessible to everyone in Africa. Whether you are a new startup or
            an established player, Infinity Health is your partner in this
            journey.
          </p>
          <p> Join us as embark on this transformative journey to
            redefine access to quality healthcare in Africa. Together, we can
            make a difference and forge a brighter, healthier future for
            generations to come.</p>
        </div>
      </div>
    </div>
  );
}
