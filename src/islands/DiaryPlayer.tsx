import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig, useInView } from "motion/react";
import { PlayIcon, PauseIcon, ArrowCounterClockwiseIcon, WarningIcon, PaperPlaneTiltIcon, CheckIcon } from "@phosphor-icons/react";
import PhoneFrame, { DiaryCard } from "./PhoneFrame";
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
        <PhoneFrame className="h-[40rem] w-full max-w-[21rem]" status={diary[Math.max(0, n - 1)]?.t ?? "07:00"} title={t.phoneTop} patient={t.patient} carer={t.carer}>
          <div ref={feed} className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 py-3 [scrollbar-width:none]" aria-live="polite">
            <AnimatePresence initial={false}>
              {diary.slice(0, n).map((e) => (
                <motion.div key={e.t + e.title} layout initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}>
                  <DiaryCard {...e} icon={e.summary ? <PaperPlaneTiltIcon size={13} weight="fill" /> : e.hl ? <WarningIcon size={14} weight="fill" /> : <CheckIcon size={14} weight="bold" />} />
                </motion.div>
              ))}
            </AnimatePresence>
            {playing && !finished && (
              <div className="flex gap-1 px-2 py-1" aria-hidden>
                {[0, 1, 2].map((i) => <motion.span key={i} className="size-2 rounded-full bg-[#9db0b1]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.15 }} />)}
              </div>
            )}
          </div>
        </PhoneFrame>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggle} className="btn btn-accent">
            {finished ? <><ArrowCounterClockwiseIcon size={20} weight="bold" />{restart}</> : playing ? <><PauseIcon size={20} weight="fill" />{t.pause}</> : <><PlayIcon size={20} weight="fill" />{t.play}</>}
          </button>
          <span className="text-sm tabular-nums text-ink-3">{n}/{diary.length}</span>
        </div>
      </div>
    </MotionConfig>
  );
}
