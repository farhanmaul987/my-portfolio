import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] size-5 rounded-full bg-prLavender mix-blend-difference"
      animate={{ x: position.x - 12, y: position.y - 12 }}
      transition={{ type: "tween", ease: "linear", duration: 0.01 }}
    />
  );
}
