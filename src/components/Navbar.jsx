import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Img/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (section, page = "/") => {
    setIsOpen(false);
    if (page !== "/"){
      navigate(page);
      return
    }
    if (location.pathname === "/"){
      if (section){
        document.getElementById(section)?.scrollIntoView({behavior: "smooth"});
      }
    }else{
      navigate("/", {state: {scrollTo: section}});
    }
  };

  return (
    <header className="z-10 fixed flex justify-between items-center bg-white shadow-md px-4 w-full h-15">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNav("home")}
      >
        <img
          src={logo}
          alt="image logo"
          className="w-24 md:w-32 h-auto object-contain"
        />
      </div>
      <nav className="hidden md:flex gap-4 text-gray-700">
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("home")}>Home</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("","/about-us")}>About Us</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("portfolio")}>Portfolio</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("testimonials")}>Testimonials</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("contact")}>Contact</button>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick= {() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes size={20} className="text-gray-700" />
          ) : (
            <FaBars size={20} className="text-gray-700" />
          )}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden top-15 right-0 absolute flex flex-col gap-4 bg-white shadow-lg p-4 w-full text-gray-700">
          <button className="font-semibold cursor-pointer" onClick={() => handleNav("home")}>Home</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("","/about-us")}>About Us</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("portfolio")}>Portfolio</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("testimonials")}>Testimonials</button>
        <button className="font-semibold cursor-pointer" onClick={() => handleNav("contact")}>Contact</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
