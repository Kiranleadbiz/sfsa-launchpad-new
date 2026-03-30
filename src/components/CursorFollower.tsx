import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: fine)").matches) {
      setVisible(true);
    }

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, hsl(197 76% 55% / 0.3), transparent 70%)",
      }}
    />
  );
};

export default CursorFollower;
