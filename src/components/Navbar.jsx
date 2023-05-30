import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes,FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleClick=()=>setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-indigo-700 text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "45px" }} />
      </div>
      {/*  menu  */}

      <ul className="hidden md:flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-indigo-700 flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
                <a href="/" className="flex justify-between items-center w-full text-gray-300">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-md">
                <a href="/" className="flex justify-between items-center w-full text-gray-300">
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700 rounded-md">
                <a href="/" className="flex justify-between items-center w-full text-gray-300">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>

            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-md">
                <a href="/" className="flex justify-between items-center w-full text-gray-300">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
