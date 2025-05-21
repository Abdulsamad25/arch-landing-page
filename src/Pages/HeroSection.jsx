import React from "react";
import HeroImg from "../assets/Img/Hero-img.jpg";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <>
  <div className="flex justify-center items-center bg-cover bg-center mb-5 pt-15 w-full h-full" data-aos="fade-up" data-aos-duration="1000">
  <div className="flex md:flex-row flex-col w-full h-auto md:h-screen">
    <div className="flex flex-col justify-start items-start bg-white/80 p-6 md:p-10 w-full md:w-1/2 h-auto md:h-full">
      <h1 className="mb-2 font-extralight text-2xl md:text-6xl md:text-left text-center leading-[1.3]">
        EXPLORE ELEGANCE & INNOVATIVE DESIGN
      </h1>
      <p className="space-y-2 mb-4 w-full text-base md:text-lg md:text-left text-center leading-relaxed">
        Welcome to Cynosure, A Luxury Home Design Firm, where architectural excellence meets creativity. Discover unique solutions tailored to your lifestyle.
      </p>
      <Button />
    </div>
    <div
      className="flex justify-center items-center w-full md:w-1/2 h-68 md:h-full"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
</div>
    </>
  );
};

export default HeroSection;
