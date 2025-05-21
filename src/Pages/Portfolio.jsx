import React from "react";
import { Link } from "react-router-dom";
import Home1 from "../assets/Img/Home-1.jpg";
import Home2 from "../assets/Img/Home-2.jpg";
import Home3 from "../assets/Img/Home-3.jpg";
import Home4 from "../assets/Img/Home-4.jpg";
import Home5 from "../assets/Img/Home-5.jpg";
import Home6 from "../assets/Img/Home-6.jpg";
import Home7 from "../assets/Img/Home-7.jpg";
import Home8 from "../assets/Img/Home-8.jpg";
import Home9 from "../assets/Img/Home-9.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div
        className="flex flex-col justify-center items-center bg-white/80 p-6 md:p-10 w-full h-auto md:h-full"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="mb-4 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center">
          OUR PORTFOLIO
        </h1>
        <p className="mb-4 w-full max-w-2xl text-sm sm:text-sm md:text-sm lg:text-sm text-center leading-relaxed">
          Explore Our Portfolio showcasing stunning architectural photography.
          Discover captivating designs throughout the State of Michigan.
        </p>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4">
          {[
            {
              src: Home1,
              link: "/portfolio/modern-villa",
              title: "Modern Villa",
              desc: "A stunning modern villa with open spaces.",
            },
            {
              src: Home2,
              link: "/portfolio/lake-house",
              title: "Lake House",
              desc: "A peaceful retreat by the lake.",
            },
            {
              src: Home3,
              link: "/portfolio/urban-loft",
              title: "Urban Loft",
              desc: "Contemporary design in the city.",
            },
            {
              src: Home4,
              link: "/portfolio/classic-estate",
              title: "Classic Estate",
              desc: "Timeless elegance and luxury.",
            },
            {
              src: Home5,
              link: "/portfolio/mountain-cabin",
              title: "Mountain Cabin",
              desc: "Cozy living in the mountains.",
            },
            {
              src: Home6,
              link: "/portfolio/beachfront-home",
              title: "Beachfront Home",
              desc: "Relaxation by the sea.",
            },
            {
              src: Home7,
              link: "/portfolio/family-residence",
              title: "Family Residence",
              desc: "Spacious and welcoming.",
            },
            {
              src: Home8,
              link: "/portfolio/minimalist-home",
              title: "Minimalist Home",
              desc: "Sleek and simple design.",
            },
            {
              src: Home9,
              link: "/portfolio/country-house",
              title: "Country House",
              desc: "Rustic charm in the countryside.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-2 border-gray-900 border-b-1 h-full text-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="mb-4 rounded w-full h-56 object-cover img-matrix"
              />
              <Link
                to={item.link}
                className="font-semibold text-gray-800 text-xl text-center"
              >
                {item.title}
              </Link>
              <p className="mb-2 text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4 p-4 w-full h-auto">
          <Link to="/about-us">
            <button className="bg-gray-900 hover:bg-gray-800 px-4 py-2 text-white transition duration-300 cursor-pointer">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
