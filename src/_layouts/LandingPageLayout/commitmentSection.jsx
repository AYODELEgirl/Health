import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import orientationvideo from "../../assets/videos/orientationvideo.mp4"
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
    <div>
      <h1 className="font-bold flex flex-col gap-10 items-center justify-center text-[2rem] text-center mt-24">
        We are commited to expanding healthcare access <br /> in africa with our
        market access solution
      </h1>
      <div className="flex relative justify-center pt-10">
        <div className="absolute top-80">
          {show && <FaCirclePlay size={120} style={{ color: "white" }} />}
        </div>
        <video
          ref={videoRef}
          loop
          muted
          style={{
            width: "85%",
          }}
          className="rounded-xl"
          onClick={handlePlay}
        >
          <source
            src={orientationvideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-[2rem] mb-3">
          Our Commitment to Transformation
        </h1>
        <p className="">
          By integrating our mission and vision into every strategy and
          decision, we're <br /> not just participating in Africa's healthcare
          journey. We're actively shaping it, <br />
          join us as we forge a better future for all
        </p>
      </div>
      <div className="flex flex-row gap-16 p-10 justify-center">
        <section className="bg-[#69BD450A] rounded-3xl w-[280px] h-[280px]  items-center justify-center  flex flex-col gap-6 ">
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
        <section className="bg-[#69BD450A] rounded-3xl w-[280px] h-[280px] items-center justify-center  flex flex-col gap-6 ">
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
        <section className="bg-[#69BD450A] rounded-3xl w-[280px] h-[280px] items-center justify-center  flex flex-col gap-6 ">
          <div className="">
            <figure>
              <img src={research} alt="" width={40} />
            </figure>
          </div>
          <div className="justify-center text-center">
            <h1 className="text-[28px] font-medium">Local expertise</h1>
            <p className="text-[12px] text-[#757575]">
              We're committed to helping <br /> healthcare businesses expand
              their <br />
              reach, ensuring quality healthcare is <br /> more accesible across
              the <br />
              continent
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
