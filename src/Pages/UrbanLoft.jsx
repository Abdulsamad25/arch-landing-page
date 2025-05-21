import React from 'react'
import UL1 from '../assets/Img/ul-1.jpg'
import UL2 from '../assets/Img/ul-2.jpg'
import UL3 from '../assets/Img/ul-3.jpg'
import Indoor from '../assets/Img/Indoor.jpg'

const UrbanLoft = () => {
  return (
    <div>
     <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
     data-aos="fade-up"
     data-aos-duration="1000"
   >
   <div className="flex flex-1 justify-center md:justify-end items-center">
     <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
       URBAN LOFT
     </h1>
   </div>
     <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
       <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
       Our latest project, the Contemporary Urban Loft, captures the essence of modern city living with its open-concept design, high ceilings, and industrial-inspired finishes. Expansive windows flood the space with natural light, while exposed brick and sleek metal accents create a stylish, metropolitan atmosphere. This loft seamlessly blends comfort and sophistication, offering a vibrant retreat in the heart of the city for those who appreciate both convenience and cutting-edge design.
       </p>
     </div>
   </div>
   <div className="flex flex-col justify-center items-center gap-4 p-4">
     <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
       <img
         src={UL1}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
       <img
         src={UL2}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
     </div>
     <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
       <img
         src={UL3}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
       <img
         src={Indoor}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
     </div>
   </div>
      </div>
  )
}

export default UrbanLoft
