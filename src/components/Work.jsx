import React from "react";

const Work = () => {
  // Array of work objects
  const works = [
    {
      title: "Furniture e-commerce App",
      imgUrl:
        'https://cdn.dribbble.com/users/6870886/screenshots/20051488/media/f16e46c91563fd48d6b80c37b48ac6df.png?compress=1&resize=1000x750&vertical=top',
      tech: ['Flutter','Figma','Material UI'],
      workUrl: 'https://github.com/',
    },
    
    {
      title: "Photography Portfolio Website",
      imgUrl:
        'https://cdn.dribbble.com/users/6870886/screenshots/19725277/media/51d626308c85e403aa3e3ab67ba22022.png?compress=1&resize=400x300&vertical=top',
      tech: ['HTML', 'CSS', 'Bootstrap 5'],
      workUrl: 'https://github.com/',
    },
    {
      title: "Laith Portfolio Website",
      imgUrl:
        'https://cdn.dribbble.com/users/6870886/screenshots/20208089/portfilio1_cover.jpg',
      tech: ['Django', 'CSS','Boottsrap 5','Jquery'],
      workUrl: 'https://github.com/',
    },
    {
      title: 'Maklti food app',
      imgUrl:
        'https://cdn.dribbble.com/users/6870886/screenshots/19057557/cover_dribbble.png',
      tech: ['Flutter','Figma','Material UI'],
      workUrl: 'https://github.com/',
    }
  ];

  return (
    <div name="work" className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">Recent Works</h1>
          <p className="text-xl py-6">During my experience as a self-taught developer, I have created many projects and shared them on LinkedIn and GitHub. I am always on the lookout for new and challenging projects to work on.</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
          {/* Map over the works array and render each work */}
          {works.map((work) => (
            <a
              href={work.workUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-200 rounded-lg overflow-hidden"
              key={work.title}
            >
              {/* Work image */}
              <img
                src={work.imgUrl}
                alt="work"
                className="w-full h-36 md:h-48 object-cover"
              />
              {/* Work details */}
              <div className="w-full p-5 text-black">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {work.title}
                </h3>
                {/* Technologies */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                  {work.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-slate-300 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;