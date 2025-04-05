import React, { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Hero from "./Hero";
import { BsWhatsapp } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useScroll, useSpring } from "framer-motion";

const Body = () => {
  const { theme } = useContext(ThemeContext);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex h-screen bg-white dark:bg-black text-black dark:text-white" id={theme}>
      <NavBar />
      <div className="w-1/12 h-full fixed left-0 top-0 flex flex-col justify-end items-center gap-8 cursor-pointer text-xl">
        <a href="https://wa.me/917428716307" className="px-2 py-1">
          <BsWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/vansh-singh-4b780a206/" className="px-2 py-1">
          <IoLogoLinkedin />
        </a>
        <a href="https://github.com/vansh0784" className="px-2 py-1">
          <FaGithub />
        </a>
        <a href="https://x.com/vanshsin784" className="px-2 py-1">
          <FaXTwitter />
        </a>
        <div className={`w-0.5 h-[20%] ${theme === "dark" ? "bg-gray-200" : "bg-gray-800"}`}></div>
      </div>
      <div
        ref={scrollRef}
        className="w-10/12 px-[5%] mx-auto h-full flex overflow-auto scrollbar-hidden custom-scrollbar pt-[80px]"
      >
        <div className="w-[97%]">
          <Hero />
          <Contact />
        </div>
        <motion.div
          className={`w-[0.6em] fixed h-[8em] top-[50%] right-[8%] rounded-xl overflow-hidden ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <motion.div
            className="w-full h-full bg-orange-500 rounded-2xl origin-top"
            style={{ scaleY }}
          />
        </motion.div>
      </div>
      <div className="w-1/12 h-full flex flex-col justify-end items-center fixed right-0 top-0 gap-8">
        <a href="mailto:vanshsin784@gmail.com" className="rotate-90 mb-16">
          <p>vanshsin784@gmail.com</p>
        </a>
        <div className={`w-0.5 h-[20%] ${theme === "dark" ? "bg-gray-200" : "bg-gray-800"}`}></div>
      </div>
    </div>
  );
};

export default Body;
