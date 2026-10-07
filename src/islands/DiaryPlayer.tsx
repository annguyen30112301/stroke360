import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useInView } from "motion/react";
import { PlayIcon, PauseIcon, ArrowCounterClockwiseIcon, WarningIcon, PaperPlaneTiltIcon, BatteryFullIcon, WifiHighIcon } from "@phosphor-icons/react";
import type { DiaryEntry } from "../content/types";
import type { Content } from "../content/vi";

interface Props { diary: DiaryEntry[]; t: Content["nhatKy"]; restart: string }

export default function DiaryPlayer({ diary, t, restart }: Props) {
  const [n, setN] = useState(0);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLDivElement>(null), feed = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(diary.length); return; }
    setPlaying(true);
  }, [inView, diary.length]);

  useEffect(() => {
    if (!playing) return;
    if (n >= diary.length) { setPlaying(false); return; }
    const id = setTimeout(() => setN((x) => x + 1), n === 0 ? 300 : 1100);
    return () => clearTimeout(id);
  }, [playing, n, diary.length]);

  useEffect(() => { feed.current?.scrollTo({ top: feed.current.scrollHeight, behavior: "smooth" }); }, [n]);

  const finished = n >= diary.length;
  const toggle = () => { if (finished) { setN(0); setPlaying(true); } else setPlaying(!playing); };

  return (
    <MotionConfig reducedMotion="user">
      <div ref={root} className="grid justify-items-center gap-6">
        <div className="w-full max-w-[22rem] rounded-[2.75rem] bg-[#0f2427] p-3 shadow-[0_40px_80px_-30px_rgb(8_40_42/0.55)] ring-1 ring-black/10">
          <div className="relative flex h-[40rem] flex-col overflow-hidden rounded-[2.2rem] bg-sunken">
            <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0f2427]" aria-hidden />
            <div className="bg-gradient-to-br from-teal-700 to-teal-500 px-5 pb-4 pt-3 text-white">
              <div className="flex items-center justify-between text-xs font-semibold opacity-90" aria-hidden><span>18:30</span><span className="flex gap-1"><WifiHighIcon size={14} weight="bold" /><BatteryFullIcon size={14} weight="bold" /></span></div>
              <p className="mt-4 text-xs opacity-85">{t.phoneTop}</p>
              <p className="font-bold">{t.patient}</p>
              <p className="text-xs opacity-85">{t.carer}</p>
            </div>
            <div ref={feed} className="flex-1 overflow-y-auto px-3.5 py-4 [scrollbar-width:none]" aria-live="polite">
              <AnimatePresence initial={false}>
                {diary.slice(0, n).map((e) => (
                  <motion.div key={e.t + e.title} layout initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    className={`mb-2.5 rounded-2xl p-3.5 text-[0.82rem] leading-snug shadow-sm ${e.summary ? "bg-teal-800 text-white" : "border-l-4 bg-surface " + (e.hl ? "border-rose-500" : "border-teal-300")}`}>
                    <div className={`flex items-center gap-1.5 text-xs font-bold ${e.summary ? "text-teal-100" : "text-brand"}`}>
                      {e.hl && <WarningIcon size={14} weight="fill" className="text-rose-500" />}{e.summary && <PaperPlaneTiltIcon size={14} weight="fill" />}
                      {e.t} · {e.tag}
                    </div>
                    <b className={`mt-0.5 block ${e.summary ? "!text-white" : ""}`}>{e.title}</b>
                    <p className={e.summary ? "text-teal-50/90" : "text-muted"}>{e.note}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {playing && !finished && (
                <div className="flex gap-1 px-2 py-1" aria-hidden>
                  {[0, 1, 2].map((i) => <motion.span key={i} className="size-2 rounded-full bg-faint" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }} />)}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggle} className="btn btn-primary">
            {finished ? <><ArrowCounterClockwiseIcon size={20} weight="bold" />{restart}</> : playing ? <><PauseIcon size={20} weight="fill" />{t.pause}</> : <><PlayIcon size={20} weight="fill" />{t.play}</>}
          </button>
          <span className="text-sm tabular-nums text-faint">{n}/{diary.length}</span>
        </div>
      </div>
    </MotionConfig>
  );
}
