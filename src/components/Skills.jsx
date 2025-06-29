import React, { useContext } from 'react'
import html from "../assets/pg-lang/html.png"
import css from "../assets/pg-lang/css.png";
import js from "../assets/pg-lang/js.png"
import react from "../assets/pg-lang/react.png";
import types from "../assets/pg-lang/typescript.png";
import tailcss from "../assets/pg-lang/tailwind.png";
import gsapicon from "../assets/pg-lang/newgsap.png";
import framer from "../assets/pg-lang/newframer.png";
import nodeicon from "../assets/pg-lang/newnode.png";
import expressicon from "../assets/pg-lang/express.png";
import mysql from "../assets/pg-lang/mysql.png";
import mongo from "../assets/pg-lang/mongo.png";
import npmicon from "../assets/pg-lang/npm.png";
import giticon from "../assets/pg-lang/git.png";
import githubicon from "../assets/pg-lang/newgithub.png";
import redux from "../assets/pg-lang/redux.png"
import { motion } from 'framer-motion'
import { BsFlower3 } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
  })
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "text-[#F9F6EE]" : "text-[#333333]";

  return (
    <div id="skills" className="flex flex-col justify-center items-start px-4 py-2 mt-[10%] gap-8 border-b-gray-700">
      {/* Header */}
      <div className="flex items-center justify-start gap-4 text-xl font-bold">
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ fontSize: "1.5em" }}
        >
          <BsFlower3 />
        </motion.span>
        <p className={`text-left text-2xl font-bold ${textColor}`}>MY STACK</p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-col gap-12 w-full px-4 py-2">
        {[
          {
            title: "FRONTEND",
            items: [
              { icon: html, name: "HTML" },
              { icon: css, name: "CSS" },
              { icon: js, name: "JavaScript" },
              { icon: react, name: "React" },
              { icon: redux, name: "Redux" },
              { icon: types, name: "Typescript" },
              { icon: tailcss, name: "Tailwind CSS" },
              { icon: gsapicon, name: "GSAP" },
              { icon: framer, name: "Framer Motion" },
            ],
            custom: 1,
          },
          {
            title: "BACKEND",
            items: [
              { icon: nodeicon, name: "Node JS" },
              { icon: expressicon, name: "Express JS" },
            ],
            custom: 2,
          },
          {
            title: "DATABASE",
            items: [
              { icon: mysql, name: "MySQL" },
              { icon: mongo, name: "Mongo DB" },
            ],
            custom: 3,
          },
          {
            title: "TOOLS",
            items: [
              { icon: npmicon, name: "NPM" },
              { icon: giticon, name: "Git" },
              { icon: githubicon, name: "Github" },
            ],
            custom: 4,
          },
        ].map((section) => (
          <motion.div
            key={section.title}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={section.custom}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-6"
          >
            {/* Title Left Side (on Desktop) */}
            <h1 className={`text-3xl w-2/4 font-bold ${textColor} lg:w-1/4`}>{section.title}</h1>

            {/* Skills Right Side (on Desktop) */}
            <div className="flex flex-wrap gap-6 items-center justify-end lg:w-2/4">
              {section.items.map((skill, i) => (
                <div key={i} className="flex sm:flex-col items-start justify-start  gap-1">
                  <img src={skill.icon} alt={skill.name} className="w-8 sm:w-12 " />
                  <p className={`text-md sm:text-sm md:text-sm font-semibold ${textColor}`}>{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
