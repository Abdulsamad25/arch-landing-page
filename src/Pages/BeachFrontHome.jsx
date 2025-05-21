import React from 'react'
import BFH1 from '../assets/Img/bfh-1.jpg'
import BFH2 from '../assets/Img/bfh-2.jpg'
import BFH3 from '../assets/Img/bfh-3.jpg'
import BFH4 from '../assets/Img/bfh-4.jpg'

const BeachFrontHome = () => {
  return (
 <div>
     <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
     data-aos="fade-up"
     data-aos-duration="1000"
   >
   <div className="flex flex-1 justify-center md:justify-end items-center">
     <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
       BEACH FRONT HOME 
     </h1>
   </div>
     <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
       <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
       Our latest project, the Beach Front Home, is a stunning retreat that embraces the beauty of coastal living. This home features panoramic ocean views, spacious open-plan interiors, and floor-to-ceiling windows that invite the sea breeze and natural light. With elegant outdoor living spaces, direct beach access, and luxurious finishes throughout, the Beach Front Home offers a perfect blend of relaxation and sophistication—making it an ideal sanctuary for those who cherish life by the water.
       </p>
     </div>
   </div>
   <div className="flex flex-col justify-center items-center gap-4 p-4">
   <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
       <img
         src={BFH3}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
       <img
         src={BFH4}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
     </div>
     <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
       <img
         src={BFH1}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
       <img
         src={BFH2}
         alt="Modern Villa"
         className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
       />
     </div>
   
   </div>
      </div>
  )
}

export default BeachFrontHome
