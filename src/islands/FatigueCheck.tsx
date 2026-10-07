import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { CheckIcon } from "@phosphor-icons/react";
import type { Content } from "../content/vi";

interface Props { t: Content["congDong"]["fatigue"]; c4: string; service: string }

export default function FatigueCheck({ t, c4, service }: Props) {
  const [on, setOn] = useState<boolean[]>(() => t.items.map(() => false));
  const n = on.filter(Boolean).length;
  const level = n <= 1 ? "low" : n <= 3 ? "mid" : "high";
  return (
    <MotionConfig reducedMotion="user">
      <div className="panel p-6 sm:p-8 h-full">
        <h3 className="text-xl">{t.title}</h3>
        <p className="mt-1 text-sm text-ink-2">{t.lead}</p>
        <ul className="mt-4 grid gap-2">
          {t.items.map((item, i) => (
            <li key={i}>
              <label className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border px-4 py-2.5 transition-colors ${on[i] ? "border-accent bg-tint/60" : "border-hair hover:bg-canvas"}`}>
                <input type="checkbox" className="sr-only" checked={on[i]} onChange={() => setOn(on.map((x, k) => (k === i ? !x : x)))} />
                <span className={`grid size-6 shrink-0 place-items-center rounded-md border-2 transition-colors ${on[i] ? "border-accent bg-accent text-on-accent" : "border-hair"}`}>
                  <AnimatePresence>{on[i] && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><CheckIcon size={14} weight="bold" /></motion.span>}</AnimatePresence>
                </span>
                <span className="text-[0.95rem]">{item}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex flex-1 gap-1" aria-hidden>
            {t.items.map((_, i) => (
              <motion.span key={i} className="h-2 flex-1 rounded-full" animate={{ backgroundColor: i < n ? (level === "high" ? "#ef233c" : level === "mid" ? "#f59e0b" : "#0fa9a6") : "var(--sunken)" }} />
            ))}
          </div>
          <span className="text-sm font-semibold tabular-nums text-ink-2">{t.count.replace("{n}", String(n))}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.p key={level} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} aria-live="polite"
            className={`mt-4 rounded-2xl p-4 text-[0.95rem] ${level === "high" ? "bg-urgent-soft" : "bg-tint"}`}>
            <span dangerouslySetInnerHTML={{ __html: t[level] }} />{" "}
            {level === "mid" && <a href={c4} className="font-semibold">{t.midLink}</a>}
            {level === "high" && <a href={service} className="font-semibold">{t.highLink}</a>}
          </motion.p>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
