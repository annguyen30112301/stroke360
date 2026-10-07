import { useDeferredValue, useMemo, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { BrainIcon, HospitalIcon, HouseLineIcon, PlantIcon, HeartHalfIcon, MagnifyingGlassIcon, CheckCircleIcon, SealCheckIcon, ArrowRightIcon, ArrowCounterClockwiseIcon, ClockIcon, LockSimpleIcon } from "@phosphor-icons/react";
import type { Lesson, StageKey } from "../content/types";
import type { Content } from "../content/vi";
import { progress } from "../lib/progress";
import { useProgress } from "../lib/useProgress";
import Certificate from "./Certificate";

const STAGE_ICON = { K: BrainIcon, A: HospitalIcon, B: HouseLineIcon, C: PlantIcon, T: HeartHalfIcon } as const;
const ORDER: StageKey[] = ["K", "A", "B", "C", "T"];
const fmt = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));
/** accent-insensitive search: "sac" matches "sặc" */
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");

interface Props {
  lessons: Lesson[];
  stages: Content["stages"];
  stageNotes: Content["stageNotes"];
  t: Content["hoc"];
  ui: Content["ui"];
  base: string; // language root, e.g. /stroke360/en/
}

export default function LessonBrowser({ lessons, stages, stageNotes, t, ui, base }: Props) {
  const done = useProgress();
  const [q, setQ] = useState("");
  const query = norm(useDeferredValue(q).trim());
  const total = lessons.length;
  const pct = Math.round((done.length / total) * 100);

  const groups = useMemo(() => ORDER.map((k) => ({
    k,
    items: lessons.filter((l) => l.stage === k && (!query || norm(l.title + " " + l.keywords).includes(query)))
  })).filter((g) => g.items.length), [lessons, query]);

  const need = lessons.filter((l) => l.ready && (l.stage === "A" || l.stage === "B")).map((l) => l.id);
  const missing = need.filter((id) => !done.includes(id));

  return (
    <MotionConfig reducedMotion="user">
      {/* Search + progress */}
      <div className="card -mt-6 grid gap-6 sm:-mt-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <label className="relative block">
          <span className="sr-only">{t.searchAria}</span>
          <MagnifyingGlassIcon size={22} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint" aria-hidden />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search}
            className="field !mt-0 !rounded-full !pl-12 text-lg" />
        </label>
        <div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <b>{fmt(t.progress, { done: done.length, total })}</b>
            <button type="button" onClick={() => progress.reset()} className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
              <ArrowCounterClockwiseIcon size={16} weight="bold" />{t.reset}
            </button>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-sunken" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <motion.div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-rose-500"
              initial={false} animate={{ width: `${pct}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          </div>
        </div>
      </div>

      {/* Stages */}
      <div className="mt-14 grid gap-16">
        {groups.length === 0 && (
          <p className="text-lg">{t.empty} <a href={base + "cong-dong.html#hoi"}>{t.emptyLink}</a>.</p>
        )}
        {groups.map(({ k, items }) => {
          const Icon = STAGE_ICON[k];
          return (
            <section key={k} id={`stage-${k}`} className="scroll-mt-28">
              <div className="mb-6 flex items-start gap-4">
                <span className={`icon-tile shrink-0 ${k === "T" ? "alert" : ""}`}><Icon size={28} weight="duotone" /></span>
                <div>
                  <h2 className="h-section !text-[clamp(1.4rem,1rem+1.2vw,2rem)]">{/^[ABC]$/.test(k) ? `${ui.stagePrefix} ${k}. ${stages[k]}` : stages[k]}</h2>
                  {stageNotes[k] && <p className="mt-1 max-w-3xl text-muted">{stageNotes[k]}</p>}
                </div>
              </div>
              <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence initial={false}>
                  {items.map((l) => <LessonCard key={l.id} l={l} done={done.includes(l.id)} ui={ui} base={base} />)}
                </AnimatePresence>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* Certificate */}
      <section className="mt-20 grid gap-8 rounded-[1.75rem] bg-brand-soft/60 p-6 sm:p-10 lg:grid-cols-2">
        <div>
          <span className="icon-tile"><SealCheckIcon size={30} weight="duotone" /></span>
          <h2 className="h-section mt-4 !text-[clamp(1.4rem,1rem+1.2vw,2rem)]">{t.cert.title}</h2>
          <p className="mt-3 text-muted">{t.cert.lead}</p>
          {missing.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {need.map((id) => (
                <a key={id} href={`${base}bai-hoc/${id}.html`}
                  className={`tag !px-3 !py-1 !text-sm no-underline ${done.includes(id) ? "" : "tag-muted"}`}>
                  {done.includes(id) ? <CheckCircleIcon size={16} weight="fill" /> : <LockSimpleIcon size={14} />}{id}
                </a>
              ))}
              <p className="mt-2 w-full font-semibold">{fmt(t.cert.remaining, { list: missing.join(", ") })}</p>
            </div>
          )}
        </div>
        <Certificate t={t.cert} unlocked={missing.length === 0} />
      </section>
    </MotionConfig>
  );
}

function LessonCard({ l, done, ui, base }: { l: Lesson; done: boolean; ui: Content["ui"]; base: string }) {
  const anim = { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 }, transition: { duration: 0.2 } };
  if (!l.ready) {
    return (
      <motion.div layout {...anim} className="card-flat flex flex-col gap-3 border-dashed bg-transparent opacity-70">
        <div className="flex items-center gap-2"><span className="tag tag-muted">{l.id}</span><span className="tag tag-muted">{ui.soon}</span></div>
        <h3 className="text-lg text-muted">{l.title}</h3>
      </motion.div>
    );
  }
  return (
    <motion.a layout {...anim} href={`${base}bai-hoc/${l.id}.html`}
      className={`card card-link group flex flex-col gap-3 ${done ? "!border-teal-300 !bg-brand-soft/50" : ""}`}>
      <div className="flex items-center gap-2 text-sm">
        <span className="tag">{l.id}</span>
        <span className="inline-flex items-center gap-1 text-faint"><ClockIcon size={16} />{ui.minutes.replace("{n}", String(l.mins))}</span>
        {done && <span className="tag ml-auto"><CheckCircleIcon size={14} weight="fill" />{ui.done}</span>}
      </div>
      <h3 className="text-lg leading-snug" style={{ viewTransitionName: `lesson-${l.id}` }}>{l.title}</h3>
      <div className="mt-auto flex items-center justify-between pt-1 text-sm">
        <span className="inline-flex items-center gap-1.5 text-brand"><SealCheckIcon size={18} weight="duotone" />{ui.approved}</span>
        <ArrowRightIcon size={18} weight="bold" className="text-brand transition-transform group-hover:translate-x-1" />
      </div>
    </motion.a>
  );
}
