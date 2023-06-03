import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#3A1078] dark:bg-[#21073C] text-gray-300 z-20'>
      <div>
        <img src={Logo} alt="logo" style={{ width: "35px" }} />
      </div>
      {/*  menu  */}
      <ul className="hidden md:flex ">
        <li className="hover:font-bold hover:text-[#00FFCA]">Home</li>
        <li className="hover:font-bold hover:text-[#00FFCA]">About</li>
        <li className="hover:font-bold hover:text-[#00FFCA]">Skills</li>
        <li className="hover:font-bold hover:text-[#00FFCA]">Work</li>
        <li className="hover:font-bold hover:text-[#00FFCA]">Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3A1078] dark:bg-[#21073C] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="fixed flex-col top-[90%] right-2 md:right-6 animate-bounce bg-white text-[#3A1078] rounded-full">
        <button onClick={handleThemeSwitch} className="p-3">
          {theme === 'dark' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
        </button>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white rounded-md font-semibold">
            <a href="/" className="flex justify-between items-center w-full text-[#3A1078] dark:text-[#21073C]">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white rounded-md font-semibold">
            <a href="/" className="flex justify-between items-center w-full text-[#3A1078] dark:text-[#21073C]">
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white rounded-md font-semibold">
            <a href="/" className="flex justify-between items-center w-full text-[#3A1078] dark:text-[#21073C]">
              Behance <FaBehance size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white rounded-md font-semibold">
            <a href="/" className="flex justify-between items-center w-full text-[#3A1078] dark:text-[#21073C]">
              Email <HiMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;