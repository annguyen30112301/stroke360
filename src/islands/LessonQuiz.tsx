import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { CheckCircleIcon, XCircleIcon, ArrowRightIcon, ConfettiIcon } from "@phosphor-icons/react";
import type { QuizItem } from "../content/types";
import type { Content } from "../content/vi";
import { progress } from "../lib/progress";

interface Props {
  id: string;
  quiz: QuizItem[];
  t: Content["lesson"];
  next?: { id: string; title: string; href: string };
  hocHref: string;
}

const shuffle = <T,>(a: T[]) => { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const k = Math.floor(Math.random() * (i + 1)); [r[i], r[k]] = [r[k], r[i]]; } return r; };

export default function LessonQuiz({ id, quiz, t, next, hocHref }: Props) {
  // answer order: original on the server, shuffled after mount
  const [orders, setOrders] = useState(() => quiz.map((q) => q.a.map((_, j) => j)));
  useEffect(() => setOrders(quiz.map((q) => shuffle(q.a.map((_, j) => j)))), [quiz]);
  const [picked, setPicked] = useState<(number | null)[]>(() => quiz.map(() => null));
  const solved = picked.every((p, i) => p === quiz[i].c);

  useEffect(() => { if (solved) progress.add(id); }, [solved, id]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid gap-6">
        {quiz.map((q, i) => {
          const p = picked[i];
          return (
            <fieldset key={i} className="card">
              <legend className="sr-only">{q.q}</legend>
              <p className="flex gap-3 text-lg font-semibold" aria-hidden>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">{i + 1}</span>{q.q}
              </p>
              <div className="mt-4 grid gap-2.5">
                {orders[i].map((j) => {
                  const chosen = p === j, ok = chosen && j === q.c, bad = chosen && j !== q.c;
                  return (
                    <motion.button key={j} type="button" aria-pressed={chosen}
                      onClick={() => setPicked((s) => s.map((x, k) => (k === i ? j : x)))}
                      whileTap={{ scale: 0.98 }}
                      animate={bad ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-colors ${
                        ok ? "border-brand bg-brand-soft" : bad ? "border-alert bg-alert-soft" : "border-line bg-surface hover:border-brand/60"}`}>
                      <span>{q.a[j]}</span>
                      <AnimatePresence>
                        {ok && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-brand"><CheckCircleIcon size={26} weight="fill" /></motion.span>}
                        {bad && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-alert"><XCircleIcon size={26} weight="fill" /></motion.span>}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
              <p className="mt-3 min-h-6 text-sm font-semibold" aria-live="polite">
                {p !== null && (p === q.c ? <span className="text-brand">{t.correct}</span> : <span className="text-alert">{t.wrong}</span>)}
              </p>
            </fieldset>
          );
        })}

        <AnimatePresence>
          {solved && (
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-teal-600 to-teal-800 p-7 text-white shadow-[var(--shadow-lift)]" role="status">
              <motion.span initial={{ rotate: -30, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ delay: 0.15, type: "spring" }} className="inline-block">
                <ConfettiIcon size={44} weight="duotone" />
              </motion.span>
              <h3 className="mt-2 text-2xl font-extrabold !text-white">{t.finished.replace("{id}", id)}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {next && <a href={next.href} className="btn bg-white text-teal-800">{t.next}: {next.title}<ArrowRightIcon size={18} weight="bold" /></a>}
                <a href={hocHref} className="btn border border-white/40 text-white">{t.progress}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
