import user1 from "../assets/user1.png";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const About = () => {
    const {theme}=useContext(ThemeContext);
  return (
    <>
      <div id="about" className="mt-6 flex flex-col items-start justify-center">
        <p className="text-left text-xl font-semibold text-gray-500 mb-4 px-4 py-2">This is me</p>
        <div className="flex items-center justify-center gap-8 p-4 border-dotted border-t-2">
          <div className="w-7/12 flex items-center justify-start">
            <p
            className={`text-gray-600 font-semibold text-md${theme==="dark"?"text-gray-400":""}`}
            >I’m a full-stack web developer passionate about building scalable, high-performance applications. With expertise in React.js, Node.js, Express, MongoDB, and Tailwind CSS, I craft seamless end-to-end solutions that blend functionality with intuitive UI/UX. My approach prioritizes performance, accessibility, and responsiveness, ensuring smooth user interactions. Beyond coding, I love solving complex problems and transforming ideas into impactful digital experiences. Always exploring new technologies like Framer Motion, I strive to push boundaries and deliver solutions that drive real-world impact. Let’s build something extraordinary together! </p>
          </div>
          <div className="flex items-center justify-end  w-5/12">
            <img className="p-4 rounded-full " src={user1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
