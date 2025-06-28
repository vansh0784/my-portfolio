import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const splitter = new GraphemeSplitter();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-12 lg:px-24 py-8">
        <div className="w-full max-w-5xl flex flex-col items-start">
          <div className="p-6 rounded-lg w-full">
            <h3
              className={`font-semibold text-xl my-4 ${
                theme === "light" ? "text-[#51e8db]" : "text-[#FF8787]"
              }`}
            >
              <TypeAnimation
                splitter={(str) => splitter.splitGraphemes(str)}
                sequence={["नमस्ते, मेरा नाम है", 2000, "Hi, my name is", 2000]}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
              />
            </h3>

            <h1
              className={`font-bold text-4xl sm:text-5xl my-4 ${
                theme === "dark" ? "text-[#6BE7DD]" : "text-[#FF8787]"
              }`}
            >
              Vansh Singh
            </h1>

            <h1
              className={`font-bold text-3xl sm:text-4xl my-4 ${
                theme === "dark" ? "text-[#6BE7DD]" : "text-[#FF8787]"
              }`}
            >
              Bringing designs to life with code.
            </h1>

            <p
              className={`font-semibold text-base sm:text-md my-4 max-w-2xl ${
                theme === "dark" ? "text-[#F8FAFC]" : "text-[#555555]"
              }`}
            >
              Crafting seamless, intuitive, and high-performance web experiences.
              As a frontend developer & MERN stack enthusiast, I bring ideas to
              life with clean code and modern design, making the web more
              accessible and engaging.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className={`cursor-pointer px-6 py-2 rounded-xl text-md font-semibold transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-[#FF8787] text-[#4A4A4A] hover:bg-[#6BE7DD]"
                  : "bg-[#6BE7DD] text-[#555555] hover:bg-[#FF8787]"
              } mt-6`}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Hero;
