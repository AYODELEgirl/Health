import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import orientationvideo from "../../assets/videos/orientationvideo.mp4";
import actionn from "../../assets/images/actionn.png";
import research from "../../assets/images/research.png";
import Localexpertise from "../../assets/images/Localexpertise.png";

export default function CommitmentSection() {
  const videoRef = useRef(null);
  const [show, setShow] = useState(true);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setShow(false);
    } else {
      videoRef.current.pause();
      setShow(true);
    }
  };

  return (
    <div className="max-w-screen-xl px-4 mx-auto overflow-x-auto m-auto">
      <h1 data-aos="fade-down"  className="font-bold flex flex-col md:gap-10  items-center justify-center lg:text-[2rem] text-lg text-center mt-24 md:leading-[10px]">
        We are committed to expanding healthcare access <br />{" "}
        <span> in Africa with our market access solutions </span>
      </h1>
      <div className="flex relative justify-center pt-10">
        <div className=" absolute flex items-center justify-center h-full ">
          {show && <FaCirclePlay style={{ color: "white" }}  className="md:size-32 size-14 mb-12"/>}
        </div>
    {/*     <video
          ref={videoRef}
          loop
          muted
          style={{
            maxWidth: "98%", // Adjusted to fit within the container
            height: "auto", // Maintain aspect ratio
            borderRadius: "15px", // Added border radius for aesthetics
          }}
          data-aos="fade-right"
          className="rounded-xl"
          onClick={handlePlay}
        >
          <source src={orientationvideo} type="video/mp4" />
        </video> */}

        <iframe 
        id="video-section"
        style={{
            maxWidth: "98%", // Adjusted to fit within the container
            height: "700px", // Maintain aspect ratio
            borderRadius: "15px", // Added border radius for aesthetics
          }}
          data-aos="fade-right"
          className="rounded-xl"  width="100%" 
src="https://www.youtube.com/embed/EIgahN6Gn_k">
</iframe>
      </div>
      <div  data-aos="fade-down" className="text-center mt-20 ">
        <h1 className="font-bold md:text-[2rem] text-[1.5rem] mb-3">
          Our Commitment to Transformation
        </h1>
        <p className="">
          By integrating our mission and vision into every strategy and
          decision, we're <br className="hidden lg:block" /> not just
          participating in Africa's healthcare journey. We're actively shaping
          it, <br />
          join us as we forge a better future for all
        </p>
      </div>
      <div data-aos="fade-down" className="flex md:flex-row pt-20 pb-24 justify-between flex-col  gap-4 items-center">
        <section  className="bg-[#69BD450A] rounded-3xl w-[350px] h-[280px]  items-center justify-center flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={actionn} alt="" width={40} />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Insightful action</h1>
            <p className="text-[12px] text-[#757575]">
              We distill complex data into clear, <br /> actionable strategies
              tailored for <br /> Africa's healthcare challenges
            </p>
          </div>
        </section>
        <section className="bg-[#69BD450A] rounded-3xl w-[350px] h-[280px] items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={Localexpertise} alt="" width={40} />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Local expertise</h1>
            <p className="text-[12px] text-[#757575]">
              Through education and <br /> collaboration, we build local <br />{" "}
              expertise to sustainably advance <br /> healthcare systems in
              Africa
            </p>
          </div>
        </section>
        <section className="bg-[#69BD450A] rounded-3xl w-[350px] h-[280px] items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={research} alt="" width={40} />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Growth and Reach</h1>
            <p className="text-[12px] text-[#757575]">
              We're committed to helping <br /> healthcare businesses expand
              their <br />
              reach, ensuring quality healthcare is <br /> more accessible
              across the <br />
              continent
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
