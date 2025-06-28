import React, { useContext } from "react";
import { motion } from "framer-motion";
import { BsFlower3 } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const ProjectTitle = ({ text }) => (
    <span className="relative inline-block text-3xl sm:text-7xl font-bold overflow-hidden group">
      <span className="relative z-10 transition-colors duration-500 group-hover:text-orange-400">
        {text}
      </span>
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-400 group-hover:w-full transition-all duration-500 ease-in-out z-0" />
    </span>
  );

  const bgColor = theme === "dark" ? "bg-[#121212]" : "bg-[#F9F6EE]";
  const textColor = theme === "dark" ? "text-[#F9F6EE]" : "text-[#121212]";
  const borderColor = theme === "dark" ? "border-[#333333]" : "border-[#d6d6d6]";

  return (
    <div
      className={`flex flex-col items-start justify-center gap-6 sm:gap-8 my-[10%] px-4 sm:px-6 py-4 ${bgColor} ${textColor}`}
    >
      <div className="flex items-center justify-start gap-3 sm:gap-4 text-xl font-bold">
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ fontSize: "1.5em" }}
          variants={fadeInVariants}
        >
          <BsFlower3 />
        </motion.span>
        <p className="text-left text-2xl font-bold">PROJECTS</p>
      </div>

      <div className="flex flex-col items-start justify-start gap-5 sm:gap-6 w-full">
        {[
          {
            id: "_01.",
            title: "Movie Mirror",
            link: "https://movie-mirror-kappa.vercel.app/",
            stack: ["React", "Tailwind css", "JavaScript", "HTML"],
          },
          {
            id: "_02.",
            title: "DUMMY PROJECT",
            stack: ["React", "Tailwind css"],
          },
          {
            id: "_03.",
            title: "DUMMY PROJECT",
            stack: ["React", "Tailwind css"],
          },
          {
            id: "_04.",
            title: "DUMMY PROJECT",
            stack: ["React", "Tailwind css"],
          },
          {
            id: "_05.",
            title: "DUMMY PROJECT",
            stack: ["React", "Tailwind css"],
          },
        ].map((proj, idx) => (
          <motion.div
            key={idx}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={idx + 1}
            className={`flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 border-b w-full ${borderColor} pb-4`}
          >
            <div className="font-semibold text-xl">{proj.id}</div>
            {proj.link ? (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2"
              >
                <ProjectTitle text={proj.title} />
                <div className="flex flex-wrap gap-3 font-semibold text-sm sm:text-base">
                  {proj.stack.map((tech, tIdx) => (
                    <h1 key={tIdx}>
                      {tech}
                      {tIdx < proj.stack.length - 1 && " ⏺"}
                    </h1>
                  ))}
                </div>
              </a>
            ) : (
              <div className="flex flex-col gap-2">
                <ProjectTitle text={proj.title} />
                <div className="flex flex-wrap gap-3 font-semibold text-sm sm:text-base">
                  {proj.stack.map((tech, tIdx) => (
                    <h1 key={tIdx}>
                      {tech}
                      {tIdx < proj.stack.length - 1 && " ⏺"}
                    </h1>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
