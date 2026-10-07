import { vi, type Content } from "../content/vi";
import { en } from "../content/en";
import type { Lang } from "../content/types";

export const content: Record<Lang, Content> = { vi, en };
export const getContent = (lang: Lang) => content[lang];

/** Page keys → file names (unchanged from the old site so shared links keep working). */
export const pages = {
  home: "",
  hoc: "hoc.html",
  congDong: "cong-dong.html",
  dichVu: "dich-vu.html",
  tacDong: "tac-dong.html",
  benhVien: "benh-vien.html",
  lienHe: "lien-he.html",
  nhatKy: "nhat-ky.html",
  tuyenDung: "tuyen-dung.html"
} as const;
export type PageKey = keyof typeof pages;

const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");

/** Site-relative URL for a path like "hoc.html#x" in the given language. */
export function href(lang: Lang, path = ""): string {
  return BASE + (lang === "en" ? "en/" : "") + path.replace(/^\//, "");
}
export const pageHref = (lang: Lang, key: PageKey, suffix = "") => href(lang, pages[key] + suffix);
export const lessonHref = (lang: Lang, id: string) => href(lang, `bai-hoc/${id}.html`);
export const asset = (path: string) => BASE + path.replace(/^\//, "");

/** "Câu {i}/{n}" → "Câu 1/4" */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));

export const vnd = (n: number, lang: Lang) =>
  lang === "vi" ? n.toLocaleString("vi-VN") + " đ" : n.toLocaleString("en-US") + " ₫";

export const stageLabel = (c: Content, stage: string) =>
  /^[ABC]$/.test(stage) ? `${c.ui.stagePrefix} ${stage}` : c.stages[stage as keyof Content["stages"]];
