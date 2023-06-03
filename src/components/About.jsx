import React from "react";
import pic from "../assets/pic1.jpg";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from '../assets/cv.pdf';

const About = () => {
  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div name="about" className="w-full h-screen bg-[#3A1078] text-gray-300 dark:bg-[#21073C]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex justify-center items-center">
            {" "}
            {/* Updated class */}
            <img
              src={pic}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Hello Clint, it's a pleasure to meet you
            </p>
            <p className="text-sm leading-7">
              Junior Flutter developer and UI/UX designer, passionate about
              creating beautiful user experiences. Combining Flutter development
              skills with a keen eye for design. Striving to blend functionality
              with aesthetics, ensuring every pixel serves a purpose. Constantly
              learning and seeking new challenges to deliver innovative
              solutions.
            </p>
            {/* Button */}
            <div className="mt-4">
              <button onClick={handleDownload} className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
                Download resume{" "}
                <span className="group-hover:translate-y-1 duration-300">
                  <BsDownload className="ml-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
