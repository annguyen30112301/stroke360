import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

/** Words light up one by one as the passage scrolls through the viewport. */
export default function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} p={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} still={!!reduce}>{w}</Word>
      ))}
    </p>
  );
}

function Word({ children, p, range, still }: { children: string; p: MotionValue<number>; range: [number, number]; still: boolean }) {
  const opacity = useTransform(p, range, [0.18, 1]);
  return <motion.span aria-hidden className="inline-block whitespace-pre" style={{ opacity: still ? 1 : opacity }}>{children + " "}</motion.span>;
}
