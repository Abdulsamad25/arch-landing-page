import React from "react";

const Button = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center gap-4 mb-10 pt-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <button
        className="bg-gray-700 p-3 rounded w-full max-w-[170px] font-medium text-white md:text-lg transition-colors cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        Explore Designs
      </button>
      <button
        className="bg-gray-700 p-3 rounded w-full max-w-[170px] font-medium text-white text-base md:text-lg transition-colors cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        About Us
      </button>
      <button
        className="bg-gray-700 p-3 rounded w-full max-w-[170px] font-medium text-white text-base md:text-lg transition-colors cursor-pointer"
        onClick={() => scrollToSection("contact")}
      >
        Contact Us
      </button>
    </div>
  );
};

export default Button;