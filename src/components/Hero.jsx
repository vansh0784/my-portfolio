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
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-start mt-4 ml-4">
        <div className="">
          <h3 className="text-orange-500 font-semibold text-xl my-6">
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={["नमस्ते, मेरा नाम है", 2000, "Hi, my name is", 2000]}
              style={{ fontSize: "1em", color: "orangered" }}
              repeat={Infinity}
            />
          </h3>
          <h1
            className={`font-bold text-5xl ${
              theme === "dark" ? "text-gray-200" : "text-gray-900"
            }`}
          >
            Vansh Singh
          </h1>
          <h1
            className={`font-bold text-5xl my-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            }`}
          >
            Bringing designs to life with code.
          </h1>
          <p className="font-semibold text-md my-6 w-[50%] text-gray-600">
            Crafting seamless, intuitive, and high-performance web experiences.
            As a frontend developer & MERN stack enthusiast, I bring ideas to
            life with clean code and modern design, making the web more
            accessible and engaging.
          </p>
          <button
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          className="cursor-pointer px-4 py-2 bg-gray-200 rounded-xl text-md font-semibold text-gray-900 my-[3%]">Get in Touch</button>
        </div>
      </div>

    </div>
    <About/>
    <Skills/>
    <Projects/>
    </>
  );
};

export default Hero;
