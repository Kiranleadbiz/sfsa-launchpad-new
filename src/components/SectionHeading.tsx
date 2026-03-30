import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle, center = true, light = false }: { title: string; subtitle?: string; center?: boolean; light?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
  >
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4 ${light ? "text-white" : ""}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/60" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-5 h-1 w-14 rounded-full ${center ? "mx-auto" : ""}`} style={{ background: "hsl(45 100% 50%)" }} />
  </motion.div>
);

export default SectionHeading;
