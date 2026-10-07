import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { SmileyIcon, SmileyMehIcon, SmileySadIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { Content } from "../content/vi";
import { store } from "../lib/progress";

const KEY = "s360_mood";
interface Props { t: Content["hoc"]["mood"]; base: string }

export default function MoodCheck({ t, base }: Props) {
  const [v, setV] = useState(5);
  useEffect(() => { const s = store.get(KEY); if (s !== null) setV(Number(s)); }, []);
  const level = v <= 3 ? "low" : v <= 6 ? "mid" : "high";
  const tip = t[level];
  const Face = level === "low" ? SmileyIcon : level === "mid" ? SmileyMehIcon : SmileySadIcon;
  const hue = level === "low" ? "text-brand" : level === "mid" ? "text-amber-500" : "text-alert";

  return (
    <MotionConfig reducedMotion="user">
      <div className="card h-full">
        <h3 className="text-xl">{t.title}</h3>
        <p className="mt-2 text-sm text-muted">{t.help}</p>
        <div className="mt-6 flex items-center gap-4">
          <motion.span key={level} initial={{ scale: 0.6, rotate: -15 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 300, damping: 14 }} className={hue}>
            <Face size={56} weight="duotone" />
          </motion.span>
          <div className="flex-1">
            <input type="range" min={0} max={10} value={v} aria-label={t.aria}
              onChange={(e) => { const n = Number(e.target.value); setV(n); store.set(KEY, String(n)); }}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gradient-to-r from-teal-400 via-amber-300 to-rose-500 accent-teal-700" />
            <div className="mt-1 flex justify-between text-xs text-faint"><span>0</span><span>5</span><span>10</span></div>
          </div>
          <span className="w-10 text-right text-3xl font-extrabold tabular-nums">{v}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={level} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
            className={`mt-6 rounded-2xl p-5 ${level === "high" ? "bg-alert-soft" : "bg-brand-soft"}`} aria-live="polite">
            <b className="text-lg">{tip.title}</b>
            <p className="mt-1 text-[0.95rem] text-muted">{tip.text}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={`${base}bai-hoc/${tip.id}.html`} className="inline-flex items-center gap-1">{tip.link}<ArrowRightIcon size={16} weight="bold" /></a>
              {"book" in tip && <a href={`${base}lien-he.html?topic=tl-nguoi-nha`} className="inline-flex items-center gap-1">{tip.book}<ArrowRightIcon size={16} weight="bold" /></a>}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
