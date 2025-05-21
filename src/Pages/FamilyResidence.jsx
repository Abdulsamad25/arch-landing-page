import React from 'react'
import FR1 from "../assets/Img/fr-1.jpg";
import FR2 from "../assets/Img/fr-2.jpg";
import FR3 from "../assets/Img/fr-3.jpg";
import FR4 from "../assets/Img/fr-4.jpg";


const FamilyResidence = () => {
  return (
   <div>
        <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-8 p-4 md:p-15 w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
      <div className="flex flex-1 justify-center md:justify-end items-center">
        <h1 className="mt-20 w-1/2 font-semibold text-gray-100 text-gray-900 text-3xl md:text-5xl md:text-left text-center leading-[1.2]">
          FAMILY RESIDENCE
        </h1>
      </div>
        <div className="flex flex-1 justify-center md:justify-center items-center md:mt-0 mt:10">
          <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
          <p className="md:mt-10 mb-6 w-full max-w-xl text-gray-900 text-base md:text-lg">
         Our latest project, the Family Residence, is thoughtfully designed to provide comfort, functionality, and style for modern family living. This home features spacious open-plan living areas, multiple bedrooms, and flexible spaces that adapt to the needs of every family member. Large windows fill the interiors with natural light, while the inviting outdoor areas are perfect for gatherings and play. With quality finishes and a warm, welcoming atmosphere, the Family Residence is the ideal place to create lasting memories together.
</p>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={FR1}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={FR2}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 p-4">
          <img
            src={FR3}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
          <img
            src={FR4}
            alt="Modern Villa"
            className="shadow-lg rounded-lg w-full md:w-1/2 h-screen"
          />
        </div>
      
      </div>
         </div>
  )
}

export default FamilyResidence
