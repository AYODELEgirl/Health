import React, { useRef, useState } from "react";
import { MdPauseCircle } from "react-icons/md";
import orientationvideo from "../../../assets/videos/orientationvideo.mp4"

export default function VideoSection() {
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
    <div className="relative flex">
      <div className="absolute inset-0 p-20  mt-36 ">
        <p className="text-[13px] text-orange-500 mb-8">About Us</p>
        <p className="text-[50px] font-bold text-white mb-4">
          615M Africans don't have access <br />
          to the healthcare products & <br /> services they need
        </p>
        <p className="text-white text-[14px]">
          We're on a mission to change that international conference
          report,"Executive summary: The state of universal health converge in
          Africa,(2021)
        </p>
      </div>
      <div className="absolute top-80 mt-40 p-20">
        {show && <MdPauseCircle size={40} style={{ color: "#69BD45" }} />}
      </div>
      <video
        ref={videoRef}
        loop
        muted
        className="w-screen"
        onClick={handlePlay}
      >
        <source
          src={orientationvideo}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
