import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";

const Top = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-teal-500 p-4 flex flex-col md:flex-row justify-between items-center ${
        isScrolled ? "fixed top-0 w-full z-50" : "static"
      }`}
    >
<<<<<<< HEAD
      <div className="flex items-center justify-center text-white text-xs md:text-xl mb-4 md:mb-0 md:mr-4 md:ml-10 ml-5">
  <IoCall className="mr-2" /> 
  Need any help? Chat to expert: +91-124-411 8270
</div>
      <div className="text-white space-x-4 mr-10 ">
        <NavLink to="/blog">BLOG</NavLink>
=======
      <div className="text-white mb-4 md:mb-0 md:mr-4 ml-10">
        Need any help? Email to expert: support@buslalatechnologies.ltd
      </div>
      <div className="text-white space-x-4 mr-10">
        <Link to="/blog">Digital Dairy</Link>
>>>>>>> 11b0fc1d16daeed4b57adf7e505a05bb69192a39
        <span className="hidden md:inline">|</span>
        <NavLink to="/contact">CONTACT US</NavLink>
        <span className="hidden md:inline">|</span>
        <NavLink to="#">CAREER</NavLink>
      </div>
    </div>
  );
};

export default Top;
