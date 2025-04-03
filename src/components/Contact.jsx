import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const inputStyle = `border px-4 py-3 rounded-3xl outline-none w-64 transition-all
    ${
      theme === "dark"
        ? "border-gray-600 bg-black text-white placeholder-gray-400"
        : "border-gray-300 bg-white text-gray-900 placeholder-gray-600"
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id="contact"
        className={`flex items-center justify-between mt-10 flex-col my-6 ${
          theme === "dark" ? "bg-black" : "bg-white"
        }`}
      >
        <h1
          className={`font-bold text-3xl mt-3 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          Get in Touch
        </h1>
        <p
          className={`font-semibold text-lg mt-2 ${
            theme === "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Contact me
        </p>

        <div className="flex justify-between items-start gap-10 mt-6 w-full">
          <div className="flex flex-col gap-4">
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-3xl font-extrabold">
            No need to hesitate, just initiate!
            </p>
            <p className="max-w-md text-md text-gray-700 font-bold">
              I'm always excited to explore new opportunities and connect with
              like-minded individuals. Whether you have a question, a project in
              mind, or just want to say hello, feel free to reach out!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-3xl font-semibold cursor-pointer transition-all
              ${
                theme === "dark"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <span>Send</span> <FaTelegramPlane />
            </button>
          </form>
        </div>
      </div>

      <footer
        className={`border-t text-center flex flex-col items-center justify-center py-6 gap-4
        ${
          theme === "dark"
            ? "border-gray-400 bg-black text-gray-400"
            : "border-gray-400 bg-white text-gray-900"
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
