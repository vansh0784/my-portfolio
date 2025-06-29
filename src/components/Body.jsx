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
    <div className="flex h-screen bg-white dark:bg-black text-black dark:text-[#F9F6EE]" id={theme}>
      {/* Top Scroll Indicator — Mobile/Tablet Only */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-[5px] z-50 sm:hidden ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <motion.div
          className="h-full bg-orange-500 origin-left"
          style={{ scaleX: scaleY }}
        />
      </motion.div>

      <NavBar />

      {/* Social Icons — Left Sidebar (hidden on mobile) */}
      <div className="hidden sm:flex w-1/12 h-full fixed left-0 top-0 flex-col justify-end items-center gap-8 cursor-pointer text-xl">
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

      {/* Scrollable Content Area */}
      <div
        ref={scrollRef}
        className="w-full sm:w-10/12 px-4 sm:px-[5%] mx-auto h-full flex overflow-auto scrollbar-hidden custom-scrollbar pt-[80px]"
      >
        <div className="w-full">
          <Hero />
          <Contact />
        </div>

        {/* Desktop Scroll Indicator — Right Vertical */}
        <motion.div
          className={`w-[0.6em] h-[8em] fixed top-[50%] right-[8%] rounded-xl overflow-hidden
                      hidden sm:block ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-300"
                      }`}
        >
          <motion.div
            className="w-full h-full bg-orange-500 rounded-2xl origin-top"
            style={{ scaleY }}
          />
        </motion.div>
      </div>

      {/* Email — Right Sidebar (hidden on mobile) */}
      <div className="hidden sm:flex w-1/12 h-full flex-col justify-end items-center fixed right-0 top-0 gap-8">
        <a href="mailto:vanshsin784@gmail.com" className="rotate-90 mb-16">
          <p>vanshsin784@gmail.com</p>
        </a>
        <div className={`w-0.5 h-[20%] ${theme === "dark" ? "bg-gray-200" : "bg-gray-800"}`}></div>
      </div>
    </div>
  );
};

export default Body;
