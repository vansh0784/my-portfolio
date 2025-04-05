import React, { useState, useEffect } from "react";
import Body from "./components/Body";
import CustomCursor from "./utils/CustomCursor";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((curr) => (curr === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative font-Montserrat">
        <CustomCursor />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

