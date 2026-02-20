import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedPhrase({ words }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity, y, scale }}
      className="text-lg md:text-xl flex flex-wrap gap-2 justify-center"
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className={w.highlight ? "text-primary font-semibold" : "text-gray-200"}
        >
          {w.text}
        </motion.span>
      ))}
    </motion.p>
  );
}
