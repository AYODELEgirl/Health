import React from 'react'
import orientationvideo from "../../../assets/videos/orientationvideo.mp4"
import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
export default function pictureAndText() {
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


    /*  */
  return (
    <div>
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
            controls
          />
        </video>
      </div>
    </div>
  )
}
