import { useState } from "react";
import { motion } from "motion/react";
import { DownloadSimpleIcon, LockSimpleIcon, SealCheckIcon } from "@phosphor-icons/react";
import type { Content } from "../content/vi";

interface Props { t: Content["hoc"]["cert"]; unlocked: boolean }

export default function Certificate({ t, unlocked }: Props) {
  const [name, setName] = useState("");
  const shown = name.trim() || t.defaultName;

  async function download() {
    await document.fonts.ready;
    const W = 1600, H = 1100, cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const g = cv.getContext("2d")!;
    g.fillStyle = "#fbf8f4"; g.fillRect(0, 0, W, H);
    const grad = g.createLinearGradient(0, 0, W, 0);
    grad.addColorStop(0, "#0fa9a6"); grad.addColorStop(1, "#087f7d");
    g.strokeStyle = grad; g.lineWidth = 18; g.strokeRect(50, 50, W - 100, H - 100);
    g.strokeStyle = "#b2e7e4"; g.lineWidth = 3; g.strokeRect(86, 86, W - 172, H - 172);
    g.textAlign = "center";
    const F = (w: number, s: number) => `${w} ${s}px "Be Vietnam Pro", system-ui, sans-serif`;
    g.fillStyle = "#475d61"; g.font = F(600, 40); g.fillText(t.issuer.toUpperCase(), W / 2, 300);
    g.fillStyle = "#087f7d"; g.font = F(800, 110); g.fillText(shown, W / 2, 500, W - 260);
    g.fillStyle = "#087f7d"; g.font = F(800, 72); g.fillText(t.badge, W / 2, 640);
    g.fillStyle = "#475d61"; g.font = F(400, 38); g.fillText(t.detail, W / 2, 740, W - 260);
    g.fillStyle = "#087f7d"; g.font = F(800, 46); g.fillText("STROKE360", W / 2, 920);
    g.fillStyle = "#6b7d80"; g.font = F(400, 30); g.fillText(new Date().toLocaleDateString(document.documentElement.lang), W / 2, 975);
    const a = document.createElement("a");
    a.href = cv.toDataURL("image/png");
    a.download = `stroke360-${shown.replace(/\s+/g, "-")}.png`;
    a.click();
  }

  return (
    <div>
      {unlocked && (
        <label className="block">
          <span className="label !mt-0">{t.nameLabel}</span>
          <input className="field" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePlaceholder} maxLength={40} />
        </label>
      )}
      <motion.div
        initial={false}
        animate={unlocked ? { filter: "blur(0px)", opacity: 1 } : { filter: "blur(3px)", opacity: 0.55 }}
        className="relative mt-4 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-700 p-1.5 shadow-[var(--shadow)]"
        aria-hidden={!unlocked}
      >
        <div className="rounded-xl border-2 border-teal-200 bg-raised px-6 py-10 text-center">
          <SealCheckIcon size={44} weight="duotone" className="mx-auto text-accent-ink" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-2">{t.issuer}</p>
          <motion.p key={shown} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="mt-3 break-words text-3xl font-extrabold text-accent-ink">{shown}</motion.p>
          <p className="mt-2 text-xl font-bold text-accent-ink">{t.badge}</p>
          <p className="mt-2 text-sm text-ink-2">{t.detail}</p>
        </div>
        {!unlocked && <span className="absolute inset-0 grid place-items-center"><LockSimpleIcon size={48} weight="duotone" className="text-ink" /></span>}
      </motion.div>
      {unlocked && (
        <button type="button" onClick={download} className="btn btn-accent mt-5">
          <DownloadSimpleIcon size={20} weight="bold" />{t.download}
        </button>
      )}
    </div>
  );
}
