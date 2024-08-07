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
      We are committed to expanding healthcare access  <br /> in Africa with our market access solutions
      </h1>
      <div className="flex relative justify-center pt-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {show && <FaCirclePlay style={{ color: "white" }} className="md:size-40 size-14" />}
        </div>
        <iframe  style={{
            maxWidth: "98%", // Adjusted to fit within the container
            height: "700px", // Maintain aspect ratio
            borderRadius: "15px", // Added border radius for aesthetics
          }}
          data-aos="fade-right"
          className="rounded-xl"  width="100%" 
src="https://www.youtube.com/embed/LC3Tr6V9QpA">
</iframe>
      </div>

      {/* <iframe  style={{
            maxWidth: "98%", // Adjusted to fit within the container
            height: "700px", // Maintain aspect ratio
            borderRadius: "15px", // Added border radius for aesthetics
          }}
          data-aos="fade-right"
          className="rounded-xl"  width="100%" 
src="https://www.youtube.com/embed/EIgahN6Gn_k">
https://youtu.be/EIgahN6Gn_k
</iframe> */}
      <div className="mt-14">

      <FooterSections />
      </div>
    </div>
  );
}
