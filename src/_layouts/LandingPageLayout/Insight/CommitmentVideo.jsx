import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import FooterSection from "../FooterSection";
import orientationvideo from "../../../assets/videos/orientationvideo.mp4"

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
            width: "70%",
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

      <FooterSection />
      </div>
    </div>
  );
}
