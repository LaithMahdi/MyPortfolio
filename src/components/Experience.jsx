import React from 'react'

const Experience = () => {
    const experiences = [
        {
          date: "January 2023 - February 2023",
          company: "AfterCode",
          position: "Flutter Developer",
          description: "I successfully developed a mobile application for managing a healthcare facility, catering to both the administrative staff and patients. This involved conducting a thorough study, designing intuitive interfaces, and seamlessly integrating the Backend system.",
        },
        {
          date: "January 2022 - February 2022",
          company: "AfterCode",
          position: "Internship",
          description: "I have expertise in creating visually captivating and user-friendly websites for restaurants. Additionally, I possess skills in managing automated tests to ensure optimal functionality and performance.",
        },
        {
          date: "January 2020 - Present",
          company: "Self employed",
          position: "Freelancer",
          description: "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
        },
      ];
  return (
    <div
      id="experience"
      className="min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">Experience</h1>
          <p className="text-xl py-6">Experienced professional with a proven track record of success</p>
        </div>
        <div className="w-full sm:w-full md:w-12/12 mt-5">
          {experiences.map((data, index) => (
            // hover:bg-white hover:shadow-2xl
            <div
              key={index}
              className={`relative flex flex-col p-3.5 border-white md:border-b-4 ${
                index % 2 === 0
                  ? "border-l-4 md:items-start"
                  : "md:items-end md:border-r-4 md:text-right"
              } `}
            >
              <h1
                className={`absolute top-0 bg-white w-max p-2.5 text-[#3A1078] dark:text-[#21073C] shadow-2xl text-2xl ${
                  index % 2 === 0 ? "left-0" : "md:right-0"
                }`}
              >
                {data.date}
              </h1>
              <h1 className="pt-14 font-bold text-3xl">{data.company}</h1>
              <h2 className="text-xl font-bold text-[#00FFCA] py-1">
                {data.position}
              </h2>
              <p className="text-lg mt-1">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience