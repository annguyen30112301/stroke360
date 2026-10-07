import { useId } from "react";
import { HeartIcon } from "@phosphor-icons/react";

/**
 * "STROKE360" set like the logo: teal "STR" + "KE", a teal-to-red heart in place of the O,
 * red "360", and the ribbon swoosh drawn underneath.
 */
export default function BrandWord({ text = "STROKE360" }: { text?: string }) {
  const id = useId().replace(/:/g, "");
  const i = text.toUpperCase().indexOf("O");
  const head = i > 0 ? text.slice(0, i) : text;
  const tail = i > 0 ? text.slice(i + 1) : "";
  const d = tail.search(/\d/);
  const letters = d >= 0 ? tail.slice(0, d) : tail;
  const digits = d >= 0 ? tail.slice(d) : "";
  return (
    <span className="brand-word relative inline-flex items-baseline whitespace-nowrap" aria-label={text} role="img">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id={`h${id}`} x1="0" y1="0.2" x2="1" y2="0.8">
            <stop offset="0.38" stopColor="#0fa9a6" /><stop offset="0.62" stopColor="#ef233c" />
          </linearGradient>
        </defs>
      </svg>
      <span aria-hidden className="text-teal-600">{head}</span>
      {i > 0 && (
        <span aria-hidden className="brand-heart relative mx-[0.02em] inline-block h-[0.82em] w-[0.86em] self-center">
          <HeartIcon weight="fill" color={`url(#h${id})`} className="absolute inset-0 size-full" />
        </span>
      )}
      <span aria-hidden className="text-teal-600">{letters}</span>
      <span aria-hidden className="text-rose-600">{digits}</span>
      {/* ribbon swoosh */}
      <svg aria-hidden viewBox="0 0 300 40" preserveAspectRatio="none" className="brand-ribbon pointer-events-none absolute -bottom-[0.28em] left-[-4%] h-[0.38em] w-[108%]">
        <defs>
          <linearGradient id={`r${id}`} x1="0" x2="1">
            <stop offset="0" stopColor="#0fa9a6" /><stop offset="0.5" stopColor="#52c8c4" /><stop offset="1" stopColor="#ef233c" />
          </linearGradient>
        </defs>
        <path d="M4 30 C 70 6, 120 6, 150 22 S 240 38, 296 8" fill="none" stroke={`url(#r${id})`} strokeWidth="6" strokeLinecap="round" pathLength={1} />
      </svg>
    </span>
  );
}
