import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
// import FooterSection from "../FooterSection";
import orientationvideo from "../../../assets/videos/orientationvideo.mp4"
import FooterSections from "../FooterSections";

export default function CommitmentVideo() {
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
      <h1 className="font-bold flex flex-col gap-10 items-center justify-center lg:text-[2rem] md:text-[1.5rem] text-[1rem] text-center mt-24">
        We are commited to expanding healthcare access <br/> in africa with our
        market access solution
      </h1>
      <div className="flex relative justify-center pt-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {show && <FaCirclePlay size={120} style={{ color: "white" }} />}
        </div>
        <video
          ref={videoRef}
          loop
          muted
          style={{
            width: "90%",
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
      <div className="mt-14">

      <FooterSections />
      </div>
    </div>
  );
}
