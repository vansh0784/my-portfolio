import React from "react";
import { motion } from "framer-motion";
import { BsFlower3 } from "react-icons/bs";

const Projects = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const ProjectTitle = ({ text }) => (
    <span className="relative inline-block group overflow-hidden text-7xl font-bold text-gray-600">
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-orange-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out opacity-20" />
    </span>
  );







  return (
    <>
      <div id="project" className="flex flex-col items-start justify-center gap-8 my-[10%]">
        <div className="flex items-center justify-start gap-4 text-xl font-bold text-gray-600">
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ fontSize: "1.5em" }}
            variants={fadeInVariants}
          >
            <BsFlower3 />
          </motion.span>
          <p className="text-gray-600 text-left text-2xl font-bold">PROJECTS</p>
        </div>

        <div className="flex flex-col items-start justify-start gap-6 w-full">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={1}
            className="flex items-start justify-start gap-4 border-b border-b-gray-800 w-full"
          >
            <div className="text-gray-700 font-semibold text-xl">_01.</div>
            <a href="https://movie-mirror-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-start justify-center cursor-pointer gap-2">
                <ProjectTitle text="Movie Mirror" />
                <div className="flex gap-6 text-gray-700 font-semibold">
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
            className="flex items-start justify-start border-b w-full gap-4 border-b-gray-800 my-3"
          >
            <div className="text-gray-700 font-semibold text-xl">_02.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 text-gray-700 font-semibold">
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
            className="flex items-start justify-start border-b w-full gap-4 border-b-gray-800"
          >
            <div className="text-gray-700 font-semibold text-xl">_03.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 text-gray-700 font-semibold">
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
            className="flex items-start justify-start border-b w-full gap-4 border-b-gray-800"
          >
            <div className="text-gray-700 font-semibold text-xl">_04.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 text-gray-700 font-semibold">
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
            className="flex items-start justify-start border-b w-full gap-4 border-b-gray-800"
          >
            <div className="text-gray-700 font-semibold text-xl">_05.</div>
            <div className="flex flex-col items-start justify-start gap-2">
              <ProjectTitle text="DUMMY PROJECT" />
              <div className="flex gap-4 text-gray-700 font-semibold">
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
