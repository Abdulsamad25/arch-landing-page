import React from "react";
import AboutBgd from "../../public/vid/About.mp4";

const AboutBg = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
      <video
        className="w-full h-full object-cover"
        src={AboutBgd}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg font-normal text-transparent text-3xl md:text-6xl text-center">
          "We will come to you no matter your location in Michigan" <br />
          ~Cynosure~
        </h1>
      </div>
    </div>
  );
};

export default AboutBg;
