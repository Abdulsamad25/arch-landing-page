import React from 'react'
import MH1 from '../assets/Img/mh-1.jpg'
import MH2 from '../assets/Img/mh-2.jpg'
import MH3 from '../assets/Img/mh-3.jpg'
import MH4 from '../assets/Img/mh-4.jpg'

const MinimalistHome = () => {
  return (
    <div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
      <div className="flex flex-1 justify-center md:justify-end items-center">
        <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
          MINIMALIST HOME
        </h1>
      </div>
        <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
          <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
          Our latest project, the Minimalist Home, is a showcase of simplicity, functionality, and modern elegance. Clean lines, open spaces, and a neutral color palette define this residence, creating a calm and clutter-free environment. Thoughtfully designed interiors maximize natural light and space, while high-quality materials and subtle details add a touch of sophistication. The Minimalist Home is perfect for those who appreciate a serene, organized, and contemporary lifestyle.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={MH1}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={MH2}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={MH3}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={MH4}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
      </div>
         </div>
  )
}

export default MinimalistHome
