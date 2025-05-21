import React from "react";
import Mv1 from "../assets/Img/Mv-1.jpg";
import Mv2 from "../assets/Img/Mv-2.jpg";
import Mv3 from "../assets/Img/Mv-3.jpg";
import Mv4 from "../assets/Img/Mv-4.jpg";

const ModernVilla = () => {
  return (
   <div>
  <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
  data-aos="fade-up"
  data-aos-duration="1000"
>
<div className="flex flex-1 justify-center md:justify-end items-center">
  <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
    EXQUISITE MODERN VILLA
  </h1>
</div>
  <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
    <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
      Our latest project, the Exquisite Modern Villa, features a harmonious
      blend of sleek contemporary architecture and luxurious comfort. This
      villa showcases both interior and exterior photography, highlighting
      open living spaces, expansive glass walls, and premium finishes. Every
      detail—from the minimalist landscaping to the sophisticated interior
      design—reflects a commitment to quality and modern aesthetics, creating
      a stunning and inviting home environment.
    </p>
  </div>
</div>
<div className="flex flex-col justify-center items-center gap-4 p-4">
  <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
    <img
      src={Mv1}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
    <img
      src={Mv2}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
  </div>
  <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
    <img
      src={Mv3}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
    <img
      src={Mv4}
      alt="Modern Villa"
      className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
    />
  </div>
</div>
   </div>
  );
};

export default ModernVilla;
