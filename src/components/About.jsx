import user1 from "../assets/user1.png";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const About = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <>
      <div id="about" className="mt-6 flex flex-col items-start justify-center">
        <p className="text-left text-xl font-semibold text-zinc-500 mb-4 px-4 py-2">This is me</p>
        <div className="flex items-center justify-center gap-8 p-4 border-dotted border-t-2">
          <div className="mt-2 w-7/12 flex items-center justify-start">
            <p
            className={`font-semibold text-md ${theme==="dark"?"text-[#F9F6EE]":"text-[#555555]"}`}
            >I'm a dedicated MERN stack developer with a strong grasp of Data Structures and Algorithms, which allows me to write efficient and scalable code. I have hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js, and I take pride in writing clean, maintainable code. My problem-solving mindset is backed by consistent practice of algorithms and participation in coding challenges, which sharpens my logical thinking.

            Beyond technical skills, I have a constant drive to learn and explore new technologies. Whether it's trying out a new framework, diving into system design, or understanding backend architecture more deeply, I always strive to expand my knowledge base. I enjoy collaborating on projects, brainstorming solutions, and turning ideas into functional products. As someone who values growth and innovation, I’m always on the lookout for opportunities that challenge me and help me contribute meaningfully to impactful tech solutions.</p>
          </div>
          <div className="mt-2 flex items-center justify-end  w-5/12">
            <img className="p-4 rounded-full " src={user1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
