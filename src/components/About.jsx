import user1 from "../assets/user1.png";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        id="about"
        className="mt-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <p className="text-xl font-semibold text-zinc-500 mb-4 self-start">
          This is me
        </p>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 p-4 border-dotted border-t-2 w-full max-w-6xl">
          {/* Image Section */}
          <img
            src={user1}
            alt="Vansh Singh"
            className="rounded-full w-60 sm:w-72 md:w-80 p-4 md:p-6"
          />

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <p
              className={`font-semibold text-base sm:text-md text-justify ${
                theme === "dark" ? "text-[#F9F6EE]" : "text-[#555555]"
              }`}
            >
              I’m{" "}
              <strong
                className={`${
                  theme === "dark"
                    ? "text-orange-500 font-semibold"
                    : "text-orange-700 font-semibold"
                }`}
              >
                Vansh Singh
              </strong>
              , a Software Developer and pre-final year B.Tech student. I
              specialize in the MERN stack and have an intermediate
              understanding of Data Structures and Algorithms, which helps me
              build scalable and optimized solutions. My development journey
              involves crafting full-stack applications with clean,
              maintainable code and a focus on performance and usability. I
              regularly sharpen my problem-solving skills through coding
              challenges and keep expanding my knowledge by exploring system
              design, backend architecture, and emerging technologies. I thrive
              in collaborative environments, enjoy transforming ideas into
              functional products, and am constantly driven by curiosity and
              growth. My goal is to build impactful solutions and grow as a
              developer with every project I take on.
            </p>

            <div className="mt-4">
              <h1 className="font-bold text-2xl">Education</h1>
              <h2 className="font-semibold text-xl px-1">
                Gautam Buddha University
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
