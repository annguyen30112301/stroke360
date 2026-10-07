import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircleIcon, PaperPlaneTiltIcon, ArrowRightIcon } from "@phosphor-icons/react";
import type { Content } from "../content/vi";

interface Props { t: Content["lienHe"]["form"]; options: [string, string][]; hotline: string; lessonHref: string }

export default function ContactForm({ t, options, hotline, lessonHref }: Props) {
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  useEffect(() => {
    const qs = new URLSearchParams(location.search), v = qs.get("goi") || qs.get("topic") || "";
    if (options.some(([k]) => k === v)) setTopic(v);
  }, [options]);

  return (
    <div className="card relative overflow-hidden sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} role="status" className="py-6 text-center">
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }} className="inline-block text-brand">
              <CheckCircleIcon size={72} weight="duotone" />
            </motion.span>
            <h2 className="mt-3 text-3xl font-extrabold">{t.thanks}</h2>
            <p className="mt-2 text-muted">{t.thanksText} <b>{hotline}</b>.</p>
            <a className="btn btn-ghost mt-6" href={lessonHref}>{t.whileWaiting}<ArrowRightIcon size={18} weight="bold" /></a>
          </motion.div>
        ) : (
          <motion.form key="f" exit={{ opacity: 0, y: -8 }} noValidate
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget, phone = (f.elements.namedItem("phone") as HTMLInputElement);
              const bad = !/^[0-9 +]{9,13}$/.test(phone.value.trim());
              setPhoneErr(bad);
              if (bad) { phone.focus(); return; }
              if (!f.checkValidity()) { f.reportValidity(); return; }
              setSent(true);
            }}>
            <h2 className="text-2xl">{t.title}</h2>
            <label className="label" htmlFor="n">{t.name}</label>
            <input id="n" name="name" required autoComplete="name" className="field" />
            <label className="label" htmlFor="p">{t.phone}</label>
            <input id="p" name="phone" type="tel" inputMode="tel" required autoComplete="tel" className="field"
              aria-invalid={phoneErr} aria-describedby={phoneErr ? "p-err" : undefined} onInput={() => phoneErr && setPhoneErr(false)} />
            <AnimatePresence>{phoneErr && <motion.p id="p-err" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-1.5 text-sm font-semibold text-alert">{t.phoneError}</motion.p>}</AnimatePresence>
            <label className="label" htmlFor="g">{t.topic}</label>
            <select id="g" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="field">
              <option value="">{t.topicDefault}</option>
              {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            <label className="label" htmlFor="m">{t.note}</label>
            <textarea id="m" name="note" rows={3} className="field resize-y" />
            <button className="btn btn-primary mt-6 w-full"><PaperPlaneTiltIcon size={20} weight="duotone" />{t.submit}</button>
            <p className="note mt-3">{t.demo}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
