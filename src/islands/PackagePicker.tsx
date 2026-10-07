import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { ArrowLeftIcon, ArrowCounterClockwiseIcon, ArrowRightIcon, CaretRightIcon, SparkleIcon } from "@phosphor-icons/react";
import type { Service, Lang } from "../content/types";
import type { Content } from "../content/vi";

type Answers = Partial<Record<"where" | "night" | "self" | "days" | "family", string>>;
interface Props { lang: Lang; services: Service[]; t: Content["dichVu"]["picker"]; priceNote: string; zalo: string; contactHref: string; restart: string; back: string; zaloLabel: string }

const ORDER = ["where", "night", "self", "days", "family"] as const;
const when: Record<string, (a: Answers) => boolean> = {
  night: (a) => a.where !== "home",
  days: (a) => a.where !== "home",
  family: (a) => a.where === "home"
};

export default function PackagePicker({ lang, services, t, priceNote, zalo, contactHref, restart, back, zaloLabel }: Props) {
  const [A, setA] = useState<Answers>({});
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const SV = Object.fromEntries(services.map((s) => [s.code, s]));
  const vnd = (n: number) => (lang === "vi" ? n.toLocaleString("vi-VN") + " đ" : n.toLocaleString("en-US") + " ₫");

  const steps = ORDER.filter((k) => !when[k] || (A.where ? when[k](A) : k !== "family"));
  const done = i >= steps.length;
  const go = (n: number) => { setDir(n > i ? 1 : -1); setI(n); };

  let result: { main: Service; why: string; cost?: number; after?: Service } | null = null;
  if (done) {
    if (A.where === "hosp") {
      const main = A.night === "yes" ? SV["S1-N"] : SV["S1-T"];
      result = { main, why: A.night === "yes" ? t.whyDay : t.whyFull, cost: main.price * Number(A.days), after: A.self === "high" ? SV.S2B : SV.S2A };
    } else {
      const main = A.family === "yes" || A.self === "high" ? SV.S2B : SV.S2A;
      result = { main, why: main.code === "S2A" ? t.whyRehab : t.whyGuide };
    }
  }

  const slide = {
    initial: (d: number) => ({ opacity: 0, x: d * 40 }),
    animate: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 })
  };

  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 260, damping: 28 }}>
      <div className="panel p-6 sm:p-8 overflow-hidden !p-0">
        <div className="h-1.5 bg-canvas">
          <motion.div className="h-full bg-accent" animate={{ width: `${(Math.min(i, steps.length) / steps.length) * 100}%` }} />
        </div>
        <div className="relative min-h-[22rem] p-6 sm:p-9">
          <AnimatePresence mode="wait" custom={dir}>
            {!done ? (() => {
              const k = steps[i], q = t.questions[k];
              return (
                <motion.div key={k} custom={dir} variants={slide} initial="initial" animate="animate" exit="exit">
                  <p className="text-sm font-semibold text-ink-3">{t.step.replace("{i}", String(i + 1)).replace("{n}", String(steps.length))}</p>
                  <h3 className="mt-2 text-2xl">{q.q}</h3>
                  <div className="mt-6 grid gap-3">
                    {q.o.map(([v, label], j) => (
                      <motion.button key={v} type="button"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * j } }}
                        whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}
                        onClick={() => { setA({ ...A, [k]: v }); go(i + 1); }}
                        className={`group flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left text-[1.02rem] font-medium transition-colors hover:border-accent hover:bg-tint/60 ${A[k] === v ? "border-accent bg-tint/60" : "border-hair bg-raised"}`}>
                        {label}<CaretRightIcon size={20} weight="bold" className="shrink-0 text-accent-ink opacity-50 group-hover:opacity-100" />
                      </motion.button>
                    ))}
                  </div>
                  {i > 0 && (
                    <button type="button" onClick={() => go(i - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-ink hover:underline">
                      <ArrowLeftIcon size={16} weight="bold" />{back}
                    </button>
                  )}
                </motion.div>
              );
            })() : result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} aria-live="polite">
                <span className="chip"><SparkleIcon size={14} weight="fill" />{t.tag}</span>
                <h3 className="mt-3 text-3xl font-extrabold">{result.main.code} · {result.main.name}</h3>
                <p className="mt-2 text-ink-2">{result.why}</p>
                <div className="mt-5 flex flex-wrap items-end gap-x-6 gap-y-3 rounded-2xl bg-tint/70 p-5">
                  <div className="text-3xl font-extrabold text-accent-ink">{vnd(result.main.price)}<span className="text-base font-medium text-ink-2">{result.main.unit}</span></div>
                  {result.cost !== undefined && (
                    <div>
                      <div className="text-sm text-ink-2">{t.estimate.replace("{days}", String(A.days))}</div>
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="text-2xl font-extrabold text-urgent">{vnd(result.cost)}</motion.div>
                    </div>
                  )}
                </div>
                {result.after && <p className="mt-4 text-[0.95rem]">{t.after} <b>{result.after.code} · {result.after.name}</b>.</p>}
                <p className="t-note mt-3">{priceNote}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="btn btn-accent" href={`${contactHref}?goi=${result.main.code}`}>{t.leavePhone}<ArrowRightIcon size={18} weight="bold" /></a>
                  <a className="btn btn-quiet" href={zalo} target="_blank" rel="noopener">{zaloLabel}</a>
                  <button type="button" className="btn btn-quiet" onClick={() => { setA({}); go(0); }}><ArrowCounterClockwiseIcon size={18} weight="bold" />{restart}</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
