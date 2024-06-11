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
    <div className="relative flex h-screen">
      <div className="relative z-10 pointer-events-none inset-0 lg:p-20 p-5 lg:mt-20 px-8 pt-5">
        <p className="text-[13px] text-orange-500 md:mb-8 mb-3 pt-5">About Us</p>
        <p className="lg:text-[50px] text-lg font-bold text-white mb-4 flex flex-col lg:gap-1">
         <span>615M Africans don't have access</span>  < br className="hidden lg:block" />
         <span>to the healthcare products &</span>  <br   className="hidden lg:block"/> 
         <span>services they need</span>
        </p>
        <p className="text-white md:text-[14px] text-xs lg:mt-10">
          We're on a mission to change that international conference
          report,"Executive summary: The state of universal health converge in
          Africa,(2021)
        </p>
      </div>
      <div className="absolute lg:top-80 top-28 lg:mt-20 py-[90px] px-5 lg:p-20">
        {show && <MdPauseCircle size={40} style={{ color: "#69BD45" }} />}
      </div>
      <video
        ref={videoRef}

        loop
        muted
        className="w-screen absolute h-screen object-cover top-0 left-0"
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
