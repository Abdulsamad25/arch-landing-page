import React from "react";
import LH1 from "../assets/Img/lh-1.jpg";
import LH2 from "../assets/Img/lh-2.jpg";
import LH3 from "../assets/Img/lh-3.jpg";
import LH4 from "../assets/Img/lh-4.jpg";

const ModernVilla = () => {
  return (
   <div>
  <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
  data-aos="fade-up"
  data-aos-duration="1000"
>
<div className="flex flex-1 justify-center md:justify-end items-center">
  <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
    LAKE HOUSE
  </h1>
</div>
  <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
    <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
    Our latest project, the Serene Lake House, embodies the perfect balance between natural beauty and modern living. This home features breathtaking views of the water, expansive windows that invite natural light, and open-concept interiors designed for relaxation and comfort. The project highlights both the tranquil outdoor spaces and the thoughtfully crafted interiors, making it an ideal retreat for those seeking peace and elegance by the lake.
    </p>
  </div>
</div>
<div className="flex flex-col justify-center items-center gap-4 p-4">
  <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
    <img
      src={LH1}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
    <img
      src={LH2}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
  </div>
  <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
    <img
      src={LH3}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
    <img
      src={LH4}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
  </div>
</div>
   </div>
  );
};

export default ModernVilla;
