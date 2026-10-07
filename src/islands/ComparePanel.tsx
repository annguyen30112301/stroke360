import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

interface Props { left: string; right: string; rows: [string, string][] }

/** Segmented switch: flip between "typical sitter" and STROKE360, rows morph in place. */
export default function ComparePanel({ left, right, rows }: Props) {
  const [side, setSide] = useState<0 | 1>(1);
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 260, damping: 28 }}>
      <div role="tablist" aria-label={`${left} / ${right}`} className="relative mx-auto grid w-full max-w-md grid-cols-2 rounded-full bg-tint p-1.5">
        {[left, right].map((label, i) => (
          <button key={label} role="tab" aria-selected={side === i} onClick={() => setSide(i as 0 | 1)}
            className={`relative z-10 min-h-12 rounded-full px-4 text-[0.95rem] font-semibold transition-colors ${side === i ? (i ? "text-on-accent" : "text-ink") : "text-ink-2"}`}>
            {side === i && <motion.span layoutId="cmp-pill" className={`absolute inset-0 -z-10 rounded-full ${i ? "bg-accent" : "bg-raised shadow"}`} />}
            {label}
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="mt-10 grid gap-3 sm:grid-cols-2">
        {rows.map((r, i) => (
          <li key={i} className={`relative overflow-hidden rounded-3xl p-6 transition-colors duration-500 ${side ? "bg-raised shadow-[var(--shadow)]" : "bg-canvas ring-1 ring-hair"}`}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div key={side} initial={{ opacity: 0, y: side ? 18 : -18 }} animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }} exit={{ opacity: 0, y: side ? -18 : 18 }}
                className="flex items-start gap-4">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full ${side ? "bg-accent text-on-accent" : "bg-hair text-ink-3"}`}>
                  {side ? <CheckIcon size={18} weight="bold" /> : <XIcon size={16} weight="bold" />}
                </span>
                <p className={`pt-1 text-[1.02rem] leading-snug ${side ? "font-semibold text-ink" : "text-ink-2"}`}>{r[side]}</p>
              </motion.div>
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </MotionConfig>
  );
}
