import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

const GlowCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Glow effect that follows cursor */}
      <motion.div
        className="absolute w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsl(197 76% 55% / 0.12), transparent 70%)",
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlowCard;
