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
    <span className="relative inline-block text-7xl font-bold overflow-hidden group">
      <span className="relative z-10 transition-colors duration-500 group-hover:text-orange-400">
        {text}
      </span>
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-orange-400 group-hover:w-full transition-all duration-500 ease-in-out z-0" />
    </span>
  );

  const bgColor = theme === "dark" ? "bg-[#121212]" : "bg-[#F9F6EE]";
  const textColor = theme === "dark" ? "text-[#F9F6EE]" : "text-[#121212]";
  const borderColor =
    theme === "dark" ? "border-[#333333]" : "border-[#d6d6d6]";

  return (
    <>
      <div
        className={`flex flex-col items-start justify-center gap-8 my-[10%] px-6 py-4 ${bgColor} ${textColor}`}
      >
        <div className="flex items-center justify-start gap-4 text-xl font-bold">
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

        <div className="flex flex-col items-start justify-start gap-6 w-full">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={1}
            className={`flex items-start justify-start gap-4 border-b w-full ${borderColor}`}
          >
            <div className="font-semibold text-xl">_01.</div>
            <a
              href="https://movie-mirror-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-start justify-center cursor-pointer gap-2">
                <ProjectTitle text="Movie Mirror" />
                <div className="flex gap-6 font-semibold">
                  <h1>React ⏺</h1>
                  <h1>Tailwind css ⏺</h1>
                  <h1>JavaScript ⏺</h1>
                  <h1>HTML</h1>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={2}
            className={`flex items-start justify-start gap-4 border-b w-full my-3 ${borderColor}`}
          >
            <div className="font-semibold text-xl">_02.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 font-semibold">
                <h1>React ⏺</h1>
                <h1>Tailwind css ⏺</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={3}
            className={`flex items-start justify-start gap-4 border-b w-full ${borderColor}`}
          >
            <div className="font-semibold text-xl">_03.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 font-semibold">
                <h1>React ⏺</h1>
                <h1>Tailwind css ⏺</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={4}
            className={`flex items-start justify-start gap-4 border-b w-full ${borderColor}`}
          >
            <div className="font-semibold text-xl">_04.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 font-semibold">
                <h1>React ⏺</h1>
                <h1>Tailwind css ⏺</h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={5}
            className={`flex items-start justify-start gap-4 border-b w-full ${borderColor}`}
          >
            <div className="font-semibold text-xl">_05.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 font-semibold">
                <h1>React ⏺</h1>
                <h1>Tailwind css ⏺</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
