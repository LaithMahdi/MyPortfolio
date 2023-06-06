import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaTimes, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { HiArrowSmUp, HiMail } from "react-icons/hi";

const Navbar = () => {
  // State variables
  const [nav, setNav] = useState(false); // Controls the visibility of the mobile menu
  const [backToTop, setBackToTop] = useState(false); // Controls the visibility of the scroll-to-top button
  const [showShadowNav, setShowShadowNav] = useState(false); // Controls the visibility of the shadow on the navbar

  useEffect(() => {
    /**
     * Event listener to track scroll position and show/hide the scroll-to-top button.
     */
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true); // Show the scroll-to-top button
        setShowShadowNav(true); // Show the shadow on the navbar
      } else {
        setBackToTop(false); // Hide the scroll-to-top button
        setShowShadowNav(false); // Hide the shadow on the navbar
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Scrolls the window to the top of the page.
   */
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Toggles the mobile menu on/off.
   */
  const handleClick = () => {
    setNav(!nav); // Toggle the visibility of the mobile menu
    setBackToTop(false); // Hide the scroll-to-top button when the mobile menu is open
  };

  return (
    <div className={!showShadowNav ? 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20':'fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 z-20 shadow-2xl'}>
      <div>
        <img src={Logo} alt="logo" style={{ width: "35px" }} />
      </div>
      {/*  menu  */}
      <ul className="hidden md:flex ">
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Home</li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">About</li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Skills</li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Experience</li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Work</li>
        <li className="hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <BsGridFill /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <div className={
        !nav
          ? "hidden"
          : "absolute top-0 left-0 w-full h-screen bg-[#3A1078] dark:bg-[#21073C]  flex flex-col justify-center items-center transition ease-in-out duration-300 delay-700"
      }>
        <div>
          <img src={Logo} alt="logo" style={{ width: "45px" }} className="mb-7" />
        </div>
        <ul
          className='w-full  flex flex-col justify-center items-center'
        >
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Home</li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">About</li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Skills</li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Work</li>
          <li className="py-6 text-4xl hover:text-[#00FFCA] hover:translate-y-1 hover:duration-200 active:text-[#00FFCA]">Contact</li>
        </ul>
        <div className="mt-10">
          <p>Copyright all rights reserved © 2023</p>
        </div>
      </div>

      {backToTop && (
        <div className="fixed flex-col top-[90%] right-2 md:right-6 animate-bounce bg-white text-[#3A1078] rounded-full">
          <button onClick={scrollUp} className="p-3">
            <HiArrowSmUp size={20} />
          </button>
        </div>
      )}

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Behance <FaBehance size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
            <a
              href="/"
              className="flex justify-between items-center w-full text-[#3A1078]"
            >
              Email <HiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;