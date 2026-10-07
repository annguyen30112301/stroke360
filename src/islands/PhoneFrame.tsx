import type { ReactNode } from "react";
import { CellSignalFullIcon, WifiHighIcon, BatteryHighIcon } from "@phosphor-icons/react";

interface Props {
  status: ReactNode;          // status-bar time (can be a motion value)
  title: string;              // "Nhật ký · Hôm nay"
  patient: string;
  carer: string;
  className?: string;
  screenClass?: string;
  children: ReactNode;        // feed
  overlay?: ReactNode;        // notification banner, pinned to the top of the screen
}

/** Realistic phone shell: titanium rim, side keys, Dynamic Island, status bar, app header, home bar. */
export default function PhoneFrame({ status, title, patient, carer, className = "", screenClass = "", children, overlay }: Props) {
  const name = carer.split("·")[0].split(":").pop()!.trim();
  const initials = name.split(" ").filter(Boolean).slice(-2).map((w) => w[0]).join("").toUpperCase();
  return (
    <div className={`relative ${className}`}>
      {/* side keys */}
      <span aria-hidden className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-[#2b3a3b]" />
      <span aria-hidden className="absolute -left-[3px] top-[27%] h-12 w-[3px] rounded-l bg-[#2b3a3b]" />
      <span aria-hidden className="absolute -left-[3px] top-[37%] h-12 w-[3px] rounded-l bg-[#2b3a3b]" />
      <span aria-hidden className="absolute -right-[3px] top-[30%] h-16 w-[3px] rounded-r bg-[#2b3a3b]" />

      {/* titanium rim → black bezel → screen */}
      <div className="h-full rounded-[3.1rem] bg-gradient-to-br from-[#8fa3a4] via-[#3c4d4e] to-[#9db0b1] p-[2px] shadow-[0_2px_3px_rgba(0,0,0,0.25),0_40px_80px_-24px_rgba(3,28,29,0.55),0_80px_120px_-60px_rgba(3,28,29,0.45)]">
        <div className="h-full rounded-[3rem] bg-[#0a1415] p-[9px]">
          <div className={`relative flex h-full flex-col overflow-hidden rounded-[2.45rem] bg-[#f2f6f6] ${screenClass}`}>
            {/* status bar + Dynamic Island */}
            <div className="relative z-20 flex h-11 shrink-0 items-center justify-between px-7 text-[0.78rem] font-semibold tabular-nums text-[#0e2a2d]">
              <span>{status}</span>
              <span className="flex items-center gap-1" aria-hidden><CellSignalFullIcon size={14} weight="fill" /><WifiHighIcon size={14} weight="bold" /><BatteryHighIcon size={18} weight="fill" /></span>
            </div>
            <div aria-hidden className="absolute left-1/2 top-2.5 z-30 h-[1.6rem] w-[34%] -translate-x-1/2 rounded-full bg-black" />

            {/* app header */}
            <div className="relative z-10 shrink-0 border-b border-black/5 bg-white/90 px-5 pb-3.5 pt-1 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-[1.35rem] font-extrabold tracking-tight text-[#0e2a2d]">{title.split("·")[0].trim()}</p>
                <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[0.68rem] font-semibold text-teal-700">{(title.split("·")[1] ?? "").trim()}</span>
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-[0.68rem] font-bold text-white">{initials}</span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate text-[0.8rem] font-semibold text-[#0e2a2d]">{patient}</p>
                  <p className="truncate text-[0.68rem] text-[#647a7d]">{carer}</p>
                </div>
              </div>
            </div>

            {/* feed */}
            <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>

            {/* home indicator */}
            <div aria-hidden className="flex h-6 shrink-0 items-center justify-center bg-[#f2f6f6]"><span className="h-[5px] w-[36%] rounded-full bg-[#0e2a2d]/85" /></div>
            {overlay && <div className="absolute inset-x-2.5 top-12 z-30">{overlay}</div>}
            {/* glass sheen */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-40 rounded-[2.45rem] bg-[linear-gradient(115deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_32%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.08)_100%)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** One diary entry inside the phone. */
export function DiaryCard({ t, tag, title, note, hl, summary, icon }: { t: string; tag: string; title: string; note: string; hl?: boolean; summary?: boolean; icon: ReactNode }) {
  if (summary) {
    return (
      <div className="rounded-[1.1rem] bg-gradient-to-br from-teal-700 to-teal-900 p-3.5 text-white shadow-[0_8px_20px_-10px_rgba(6,63,62,0.7)]">
        <div className="flex items-center gap-2 text-[0.68rem] font-semibold text-teal-100">{icon}<span>{tag}</span><span className="ml-auto tabular-nums">{t}</span></div>
        <b className="mt-1.5 block text-[0.84rem] !text-white">{title}</b>
        <p className="mt-0.5 text-[0.74rem] leading-snug text-teal-50/90">{note}</p>
      </div>
    );
  }
  return (
    <div className="flex gap-2.5 rounded-[1.1rem] bg-white p-3 shadow-[0_1px_2px_rgba(6,47,48,0.06),0_6px_16px_-10px_rgba(6,47,48,0.25)]">
      <span className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${hl ? "bg-rose-50 text-rose-600" : "bg-teal-50 text-teal-700"}`}>{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <b className="truncate text-[0.8rem] !text-[#0e2a2d]">{title}</b>
          <span className="ml-auto shrink-0 text-[0.66rem] tabular-nums text-[#647a7d]">{t}</span>
        </div>
        <p className="mt-0.5 text-[0.72rem] leading-snug text-[#3f585b]">{note}</p>
        <span className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[0.62rem] font-semibold ${hl ? "bg-rose-50 text-rose-700" : "bg-teal-50 text-teal-700"}`}>{tag}</span>
      </div>
    </div>
  );
}
