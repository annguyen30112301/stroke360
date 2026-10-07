import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useMotionValueEvent, useReducedMotion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRightIcon, CheckIcon, PaperPlaneTiltIcon, WarningIcon, BellRingingIcon } from "@phosphor-icons/react";
import type { DiaryEntry } from "../content/types";

interface Props {
  day: string;      // "Ban ngày con đi làm, STROKE360 lo."
  brand: string;    // "STROKE360"
  night: string;    // "Tối con vào với ba mẹ."
  lead: string;
  cta: { label: string; href: string };
  cta2: { label: string; href: string };
  diary: DiaryEntry[];
  phone: { top: string; patient: string; carer: string };
  notify: string;   // "Nhật ký hôm nay"
}

const START = 7 * 60, END = 18 * 60 + 30;
const toMin = (t: string) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const hhmm = (v: number) => { const m = Math.round(v / 5) * 5; return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`; };
const STARS = [[12, 18], [24, 9], [38, 22], [61, 12], [72, 26], [84, 8], [91, 20], [48, 6], [6, 30], [66, 4]];

/**
 * One scroll = one day shift (07:00 → 18:30). The sky darkens, diary entries arrive at their
 * real times, and the headline turns from "by day" to "in the evening".
 * This is the page's single deliberate theme switch on scroll.
 */
export default function HeroDay({ day, brand, night, lead, cta, cta2, diary, phone, notify }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const minutes = useTransform(p, [0, 0.9], [START, END], { clamp: true });
  const clock = useTransform(minutes, hhmm);
  const [shown, setShown] = useState(reduce ? diary.length : 1);
  useMotionValueEvent(minutes, "change", (v) => {
    const n = Math.max(1, diary.filter((e) => toMin(e.t) <= v + 1).length);
    if (n !== shown) setShown(n);
  });
  const isNight = shown >= diary.length;

  // sky + type colour
  const nightOpacity = useTransform(p, [0.62, 0.8], [0, 1]);
  const duskOpacity = useTransform(p, [0.3, 0.62, 0.8], [0, 1, 0]);
  const ink = useTransform(p, [0.66, 0.74], ["#0e2a2d", "#f2fbfa"]);
  const sub = useTransform(p, [0.66, 0.74], ["#3f585b", "#bfe3e1"]);
  // sun → moon on an arc
  const [wide, setWide] = useState(true);
  useEffect(() => { const m = matchMedia("(min-width: 1024px)"); const f = () => setWide(m.matches); f(); m.addEventListener("change", f); return () => m.removeEventListener("change", f); }, []);
  const orbX = useTransform(p, [0, 0.9], wide ? ["6%", "58%"] : ["10%", "86%"]);
  const orbY = useTransform(p, [0, 0.45, 0.9], wide ? ["70%", "12%", "20%"] : ["30%", "8%", "11%"]);
  const sunGlow = useTransform(p, [0.5, 0.85], [1, 0]);
  const starOpacity = useTransform(p, [0.7, 0.95], [0, 1]);
  const railScale = useTransform(p, [0, 0.9], [0, 1]);
  const dayOpacity = useTransform(p, [0.72, 0.82], [1, 0]);
  const dayY = useTransform(p, [0.72, 0.82], [0, -24]);
  const nightOp = useTransform(p, [0.8, 0.9], [0, 1]);
  const nightY = useTransform(p, [0.8, 0.9], [24, 0]);

  const [d1, d2] = day.split(brand);
  const visible = diary.slice(Math.max(0, shown - 4), shown);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className={reduce ? "relative" : "relative h-[320vh] lg:h-[360vh]"}>
        <div className="sticky top-0 h-[100dvh] min-h-[38rem] overflow-hidden" style={{ background: "linear-gradient(180deg,#d7f1ef 0%,#eef9f8 55%,#f4f8f8 100%)" }}>
          {/* afternoon: richer teal light */}
          <motion.div aria-hidden className="absolute inset-0" style={{ opacity: reduce ? 0 : duskOpacity, background: "linear-gradient(180deg,#a9e3df 0%,#d5f2f0 60%,#eefaf9 100%)" }} />
          {/* night sky */}
          <motion.div aria-hidden className="absolute inset-0" style={{ opacity: reduce ? 1 : nightOpacity, background: "radial-gradient(120% 80% at 70% 0%,#0b4b4a 0%,#062f30 45%,#031c1d 100%)" }} />
          <motion.div aria-hidden className="absolute inset-0" style={{ opacity: reduce ? 1 : starOpacity }}>
            {STARS.map(([x, y], i) => <span key={i} className="absolute size-1 rounded-full bg-white/80" style={{ left: `${x}%`, top: `${y}%` }} />)}
          </motion.div>
          {/* sun / moon */}
          <motion.div aria-hidden className="absolute size-28 -translate-x-1/2 -translate-y-1/2 sm:size-40" style={{ left: reduce ? "86%" : orbX, top: reduce ? "46%" : orbY }}>
            <motion.div className="absolute inset-[-60%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(165,232,228,0.35)_40%,transparent_70%)]" style={{ opacity: reduce ? 0 : sunGlow }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-teal-100 shadow-[0_0_80px_rgba(255,255,255,0.6)]" />
          </motion.div>

          <div className="shell relative flex h-full flex-col gap-5 pb-28 pt-24 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-12 lg:pb-0 lg:pt-20">
            {/* copy */}
            <div className="flex flex-col lg:justify-center">
              <motion.p className="font-extrabold leading-none tracking-[-0.05em] tabular-nums text-[clamp(3.5rem,2rem+7vw,8.5rem)]" style={{ color: reduce ? "#f2fbfa" : ink }} aria-hidden>
                {reduce ? hhmm(END) : <motion.span>{clock}</motion.span>}
              </motion.p>
              <div className="relative mt-3 min-h-[5.5rem] sm:min-h-[8rem]">
                <motion.h1 className="t-display absolute inset-x-0 top-0 !text-[clamp(1.9rem,1.1rem+2.8vw,3.6rem)]" style={{ color: reduce ? "#f2fbfa" : ink, opacity: reduce ? 0 : dayOpacity, y: dayY }}>
                  {d1}<span className="text-gradient-day">{brand}</span>{d2}
                </motion.h1>
                <motion.p aria-hidden={!isNight} className="t-display absolute inset-x-0 top-0 !text-[clamp(1.9rem,1.1rem+2.8vw,3.6rem)] text-white" style={{ opacity: reduce ? 1 : nightOp, y: reduce ? 0 : nightY }}>
                  {night}
                </motion.p>
              </div>
              <motion.p className="mt-2 hidden max-w-[44ch] sm:block text-[clamp(1rem,0.95rem+0.3vw,1.18rem)] leading-relaxed" style={{ color: reduce ? "#bfe3e1" : sub }}>{lead}</motion.p>
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-6">
                <a href={cta.href} className="btn btn-accent">{cta.label}<ArrowRightIcon size={18} weight="bold" /></a>
                <a href={cta2.href} className="btn hidden bg-white/70 sm:inline-flex text-teal-900 backdrop-blur hover:bg-white">{cta2.label}</a>
              </div>
            </div>

            {/* phone */}
            <div className="relative mx-auto min-h-0 w-full max-w-[20rem] flex-1 lg:max-w-[22rem] lg:flex-none">
              <div className="h-full rounded-[2.6rem] bg-[#0b2324] p-2.5 lg:h-auto shadow-[0_50px_100px_-30px_rgba(3,28,29,0.6)] ring-1 ring-black/10">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2.1rem] bg-[#f1f7f7] lg:h-[min(70dvh,36rem)]">
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0b2324]" aria-hidden />
                  <div className="bg-gradient-to-br from-teal-700 to-teal-500 px-5 pb-3.5 pt-8 text-white">
                    <p className="text-[0.7rem] opacity-80">{phone.top}</p>
                    <p className="text-sm font-bold">{phone.patient}</p>
                    <p className="text-[0.7rem] opacity-80">{phone.carer}</p>
                  </div>
                  <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden px-3 py-3" aria-live="polite">
                    <AnimatePresence initial={false} mode="popLayout">
                      {visible.map((e) => (
                        <motion.div key={e.t} layout initial={{ opacity: 0, y: 30, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.96 }}
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                          className={`rounded-2xl p-3 text-[0.78rem] leading-snug shadow-sm ${e.summary ? "bg-teal-800 text-white" : "border-l-4 bg-white text-[#0e2a2d] " + (e.hl ? "border-rose-500" : "border-teal-300")}`}>
                          <div className={`flex items-center gap-1.5 text-[0.7rem] font-bold ${e.summary ? "text-teal-100" : "text-teal-700"}`}>
                            {e.hl && <WarningIcon size={13} weight="fill" className="text-rose-500" />}
                            {e.summary ? <PaperPlaneTiltIcon size={13} weight="fill" /> : !e.hl && <CheckIcon size={13} weight="bold" />}
                            {e.t} · {e.tag}
                          </div>
                          <b className={`mt-0.5 block ${e.summary ? "!text-white" : "!text-[#0e2a2d]"}`}>{e.title}</b>
                          <p className={e.summary ? "text-teal-50/90" : "text-[#3f585b]"}>{e.note}</p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              {/* 18:30 notification */}
              <AnimatePresence>
                {isNight && (
                  <motion.div initial={{ opacity: 0, y: -16, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute -top-3 left-1/2 z-20 flex w-[104%] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white/95 p-3 text-[#0e2a2d] shadow-xl lg:-left-24 lg:-top-12 lg:w-auto lg:translate-x-0">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-600 text-white"><BellRingingIcon size={18} weight="fill" /></span>
                    <span className="text-sm"><b className="!text-[#0e2a2d]">STROKE360</b> · {notify} 18:30</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* shift rail */}
          {!reduce && (
            <div className="absolute inset-x-0 bottom-0 hidden lg:block" aria-hidden>
              <div className="shell flex items-center gap-4 pb-6 text-xs font-semibold tabular-nums">
                <motion.span style={{ color: sub }}>07:00</motion.span>
                <div className="relative h-0.5 flex-1 overflow-hidden rounded-full bg-black/10">
                  <motion.div className="absolute inset-0 origin-left bg-teal-500" style={{ scaleX: railScale }} />
                </div>
                <motion.span style={{ color: sub }}>18:30</motion.span>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
