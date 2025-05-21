import React from 'react'
import CH1 from '../assets/Img/ch-1.jpg'
import CH2 from '../assets/Img/ch-2.jpg'
import CH3 from '../assets/Img/ch-3.jpg'
import CH4 from '../assets/Img/ch-4.jpg'

const CountryHouse = () => {
  return (
  <div>
          <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
        <div className="flex flex-1 justify-center md:justify-end items-center">
          <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
            COUNTRY HOUSE
          </h1>
        </div>
          <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
            <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
            Our latest project, the Country House, captures the charm and tranquility of rural living. Surrounded by picturesque landscapes, this home features rustic architectural details, spacious porches, and cozy interiors filled with natural light. The design emphasizes comfort and warmth, with inviting living spaces and thoughtful touches that create a welcoming atmosphere. The Country House is perfect for those who appreciate a peaceful retreat and the timeless beauty of the countryside.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
            <img
              src={CH1}
              alt="Modern Villa"
              className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
            />
            <img
              src={CH2}
              alt="Modern Villa"
              className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
            <img
              src={CH3}
              alt="Modern Villa"
              className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
            />
            <img
              src={CH4}
              alt="Modern Villa"
              className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
            />
          </div>
        </div>
           </div>
  )
}

export default CountryHouse
