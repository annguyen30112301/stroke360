import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PaperPlaneTiltIcon, CheckCircleIcon } from "@phosphor-icons/react";
import type { Content } from "../content/vi";

export default function AskForm({ t }: { t: Content["congDong"]["ask"] }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="panel p-6 sm:p-8 mt-6">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} role="status" className="flex gap-4">
            <CheckCircleIcon size={40} weight="duotone" className="shrink-0 text-accent-ink" />
            <div><h3 className="text-xl">{t.doneTitle}</h3><p className="mt-1 text-ink-2">{t.doneText}</p></div>
          </motion.div>
        ) : (
          <motion.form key="f" exit={{ opacity: 0 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <label className="label !mt-0" htmlFor="qq">{t.label}</label>
            <textarea id="qq" rows={3} required placeholder={t.placeholder} className="field resize-y" />
            <p className="mt-2 text-sm text-ink-2">{t.help}</p>
            <button className="btn btn-accent mt-4"><PaperPlaneTiltIcon size={20} weight="duotone" />{t.submit}</button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
