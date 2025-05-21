import React from 'react'
import MC1 from '../assets/Img/mc-1.jpg'
import MC2 from '../assets/Img/mc-2.jpg'
import MC3 from '../assets/Img/mc-3.jpg'
// import MC4 from '../assets/Img/mc-4.jpg'
import MC5 from '../assets/Img/mc-5.jpg'

const MountainCabin = () => {
  return (
    <div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
      <div className="flex flex-1 justify-center md:justify-end items-center">
        <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
          MOUNTAIN CARBIN
        </h1>
      </div>
        <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
          <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
          Our latest project, the Mountain Cabin, is a cozy retreat nestled in the heart of nature. This cabin features rustic wood finishes, large windows that frame breathtaking mountain views, and an inviting open-concept living space designed for comfort and relaxation. Thoughtful details such as a stone fireplace, exposed beams, and natural materials create a warm and welcoming atmosphere. The Mountain Cabin is the perfect getaway for those seeking tranquility, adventure, and a deep connection with the outdoors.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={MC1}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={MC2}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={MC3}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={MC5}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
      </div>
         </div>
  )
}

export default MountainCabin
