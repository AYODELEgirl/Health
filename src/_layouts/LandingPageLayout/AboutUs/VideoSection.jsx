import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

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
    <div>
      <div className="flex relative justify-center">
        <div className="absolute top-80">
          {show && <FaCirclePlay size={120} style={{ color: "white" }} />}
        </div>
        <video
          ref={videoRef}
          loop
          muted
          className="w-screen"
          onClick={handlePlay}
        >
          <source
            src="../../src/assets/videos/orientationvideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
