import { useState,useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getButtonClass = (button) => {
    return ` px-2 py-1 transition text-md cursor-pointer ${
      activeButton === button ? "text-orange-500 hover:text-md" : "border-transparent"
    }`;
  };
  const handleButtonClick = (button, id) => {
    setActiveButton(button);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-[3%] left-[13%] w-9/12 z-50 opacity-95">
      <motion.div
        key={theme}
        className="p-0.5 rounded-3xl w-full"
        style={{
          background: theme === "dark"
            ? "linear-gradient(90deg, #d1d5db, #4b5563, #d1d5db)"
            : "linear-gradient(90deg, #e5e7eb, #1f2937, #e5e7eb)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`flex gap-8 rounded-3xl items-center justify-between px-4 py-3 cursor-pointer ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
        >
          <div className="">{`< vanshSingh />`}</div>

          <div className="flex justify-evenly items-center gap-8">
            <button onClick={() => handleButtonClick("about", "about")} className={getButtonClass("about")}>
              About
            </button>
            <button onClick={() => handleButtonClick("project", "project")} className={getButtonClass("project")}>
              Project
            </button>
            <button onClick={() => handleButtonClick("contact", "contact")} className={getButtonClass("contact")}>
              Contact
            </button>
            <button onClick={() => handleButtonClick("skills", "skills")} className={getButtonClass("skills")}>
              Skills
            </button>
            <button className="cursor-pointer text-xl p-1" onClick={toggleTheme}>
              {theme === "dark" ? <GoSun /> : <IoMoonOutline />}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
