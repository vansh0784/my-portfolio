import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getButtonClass = (button) => {
    return `px-2 py-1 transition text-md cursor-pointer ${
      activeButton === button
        ? "text-orange-500 hover:text-md"
        : "border-transparent"
    }`;
  };

  const handleButtonClick = (button, id) => {
    setActiveButton(button);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on mobile when clicked
  };

  const navItems = (
    <>
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
      <button>
        <a href="https://drive.google.com/file/d/1QuIOTOanJDIaBnTpkPzDwJDEIYE9EAmR/view" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </button>
      <button className="cursor-pointer text-xl p-1" onClick={toggleTheme}>
        {theme === "dark" ? <GoSun /> : <IoMoonOutline />}
      </button>
    </>
  );

  return (
    <div className="fixed top-[3%] left-[13%] w-9/12 z-50 opacity-90">
      <motion.div
        key={theme}
        className="p-0.5 rounded-3xl w-full"
        style={{
          background:
            theme === "dark"
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
          className={`flex items-center justify-between px-4 py-3 rounded-3xl ${
            theme === "dark"
              ? "bg-[#121212] text-[#F9F6EE]"
              : "bg-[#F9F6EE] text-[#555555]"
          }`}
        >
          <div className="text-lg">{`< vanshSingh />`}</div>

          {/* Large screen menu */}
          <div className="hidden lg:flex gap-8">{navItems}</div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className={`flex flex-col gap-4 py-4 items-center rounded-b-3xl ${
              theme === "dark"
                ? "bg-[#121212] text-[#F9F6EE]"
                : "bg-[#F9F6EE] text-[#555555]"
            } lg:hidden`}
          >
            {navItems}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NavBar;
