import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cursor from "../assets/cursor.png";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.img
      src={cursor}
      className="fixed w-6 h-6 pointer-events-none mix-blend-difference z-100"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    />
  );
};

export default CustomCursor;
