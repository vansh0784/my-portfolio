import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleButtonClick = (button, id) => {
    setActiveButton(button);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const getButtonClass = (button) =>
    `px-2 py-1 transition text-md cursor-pointer ${
      activeButton === button ? "text-orange-500" : "text-inherit"
    }`;

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
        <a
          href="https://drive.google.com/file/d/1QuIOTOanJDIaBnTpkPzDwJDEIYE9EAmR/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </button>
    </>
  );

  return (
    <div className="fixed top-[3%] left-[13%] z-50 w-[74%] md:w-[80%] sm:w-[94%]">
      <motion.div
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
        {/* Navbar core */}
        <div
          className={`flex items-center justify-between px-4 py-3 rounded-3xl ${
            theme === "dark" ? "bg-[#121212] text-[#F9F6EE]" : "bg-[#F9F6EE] text-[#555555]"
          }`}
        >
          {/* Logo */}
          <div className="text-lg font-semibold">
            <span className="hidden lg:inline">{`< vanshSingh />`}</span>
            <span className="inline lg:hidden">{`< vs />`}</span>
          </div>

          {/* Large screen menu */}
          <div className="hidden lg:flex gap-8">{navItems}</div>

          {/* Right side: hamburger + theme toggle on mobile */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="text-xl" onClick={toggleTheme}>
              {theme === "dark" ? <GoSun /> : <IoMoonOutline />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl lg:hidden"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className={`flex flex-col gap-4 py-4 items-center rounded-b-3xl lg:hidden ${
              theme === "dark" ? "bg-[#121212] text-[#F9F6EE]" : "bg-[#F9F6EE] text-[#555555]"
            }`}
          >
            {navItems}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NavBar;
