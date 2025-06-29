import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const inputStyle = `border px-4 py-3 rounded-3xl outline-none w-3/4 transition-all
    ${
      theme === "dark"
        ? "border-gray-600 bg-black text-[#F9F6EE] placeholder-gray-400"
        : "border-gray-300 bg-white text-[#555555] placeholder-gray-600"
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center justify-between mt-10 mb-6 px-4 md:px-8 lg:px-16"
      >
        <h1
          className={`font-bold text-2xl sm:text-3xl mt-3 ${
            theme === "dark" ? "text-[#F9F6EE]" : "text-[#555555]"
          }`}
        >
          Get in Touch
        </h1>
        <p
          className={`font-semibold text-base sm:text-lg mt-2 ${
            theme === "dark" ? "text-[#F9F6EE]" : "text-[#555555]"
          }`}
        >
          Contact me
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-evenly items-start gap-10 mt-6 w-full">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl sm:text-3xl font-extrabold">
              No need to hesitate, just initiate!
            </p>
            <p
              className={`max-w-lg text-md font-bold ${
                theme === "dark" ? "text-[#F9F6EE]" : "text-[#555555]"
              }`}
            >
              I'm always excited to explore new opportunities and connect with
              like-minded individuals. Whether you have a question, a project in
              mind, or just want to say hello, feel free to reach out!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full lg:w-1/2  lg:justify-center"
          >
            <label>
              <input
                type="text"
                placeholder="Your name"
                className={inputStyle}
                required
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Your email"
                className={inputStyle}
                required
              />
            </label>
            <label>
              <textarea
                placeholder="Type your message here"
                rows={3}
                className={inputStyle}
                required
              />
            </label>

            <button
              type="submit"
              className={`flex items-center justify-center w-3/4 gap-2 px-4 py-3 rounded-3xl font-semibold cursor-pointer transition-all
              ${
                theme === "dark"
                  ? "bg-gray-700 text-[#F9F6EE] hover:bg-gray-600"
                  : "bg-gray-900 text-[#F9F6EE] hover:bg-gray-800"
              }`}
            >
              <span>Send</span> <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>
      <footer
        className={`border-t text-center flex flex-col items-center justify-center py-6 gap-4 mt-8
        ${
          theme === "dark"
            ? "border-gray-400 text-[#F9F6EE]"
            : "border-gray-400 text-[#555555]"
        }`}
      >
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/vansh-singh-4b780a206/"
            className="hover:opacity-75 transition"
          >
            <IoLogoLinkedin className="text-2xl" />
          </a>
          <a
            href="https://leetcode.com/u/Vansh784/"
            className="hover:opacity-75 transition"
          >
            <SiLeetcode className="text-2xl" />
          </a>
          <a
            href="https://github.com/vansh0784"
            className="hover:opacity-75 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
        <p>© 2025 Vansh Singh. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
