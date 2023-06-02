import React from 'react';
import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import spring from "../assets/langues/spring.png";
import flutter from "../assets/langues/flutter.png";
import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";

const Skill = () => {
  const langues = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactLangue,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-600",
    },
    {
      id: 7,
      src: angular,
      title: "Angular",
      style: "shadow-rose-500",
    },
    {
      id: 8,
      src: django,
      title: "Django",
      style: "shadow-emerald-600",
    },
    {
      id: 9,
      src: symfony,
      title: "Symfony",
      style: "shadow-zinc-800",
    },
    {
        id: 10,
        src: spring,
        title: "Spring boot",
        style: "shadow-green-600",
    },
    {
        id: 11,
        src: bootstrap,
        title: "Bootstrap",
        style: "shadow-violet-500",
    },
    {
        id: 12,
        src: flutter,
        title: "Flutter",
        style: "shadow-cyan-400",
    },
    {
        id: 13,
        src: py,
        title: "Python",
        style: "shadow-yellow-400",
    },

    {
        id: 14,
        src: php,
        title: "Php",
        style: "shadow-violet-400",
    },
    {
        id: 15,
        src: c,
        title: "C",
        style: "shadow-blue-400",
    },
    {
        id: 16,
        src: java,
        title: "Java",
        style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="skill"
      className="w-full bg-[#3A1078] text-gray-300 dark:bg-[#21073C] pt-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
            Skills
          </p>
          <p className="py-6">
            I have used and worked with the following technologies in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {langues.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md transform hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="mx-auto" style={{width: '4rem',height:'4rem'}} />
              <p className="mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;