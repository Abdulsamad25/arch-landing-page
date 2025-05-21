import React from 'react'
import CE1 from '../assets/Img/ce-1.jpg'
import CE2 from '../assets/Img/ce-2.jpg'
import CE3 from '../assets/Img/ce-3.jpg'
import CE4 from '../assets/Img/ce-4.jpg'

const ClassicEstate = () => {
  return (
    <div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
      <div className="flex flex-1 justify-center md:justify-end items-center">
        <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
          CLASSIC ESTATE
        </h1>
      </div>
        <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
          <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
          Our latest project, the Classic Estate, exemplifies timeless elegance and grandeur. This estate features stately architecture, refined interiors, and beautifully landscaped grounds that evoke a sense of tradition and luxury. Expansive living spaces, high ceilings, and exquisite detailing throughout create an atmosphere of sophistication and comfort. The Classic Estate is designed for those who appreciate enduring style and a distinguished living experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={CE1}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={CE2}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={CE3}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={CE4}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
      </div>
         </div>
  )
}

export default ClassicEstate
