import { vi, type Content } from "../content/vi";
import { en } from "../content/en";
import type { Lang } from "../content/types";

export const content: Record<Lang, Content> = { vi, en };
export const getContent = (lang: Lang) => content[lang];
export const langs: Lang[] = ["vi", "en"];

/** URL slug of every page, per language. Vietnamese lives at the root, English under /en/. */
export const routes = {
  home: { vi: "", en: "" },
  hoc: { vi: "hoc", en: "learn" },
  congDong: { vi: "cong-dong", en: "community" },
  dichVu: { vi: "dich-vu", en: "services" },
  tacDong: { vi: "tac-dong", en: "impact" },
  benhVien: { vi: "benh-vien", en: "hospitals" },
  lienHe: { vi: "lien-he", en: "contact" },
  nhatKy: { vi: "nhat-ky", en: "diary" },
  tuyenDung: { vi: "tuyen-dung", en: "careers" },
  lesson: { vi: "bai-hoc", en: "lessons" }
} as const;
export type PageKey = Exclude<keyof typeof routes, "lesson">;
export type RouteKey = keyof typeof routes;

const BASE = import.meta.env.BASE_URL.replace(/\/?$/, "/");
const root = (lang: Lang) => BASE + (lang === "en" ? "en/" : "");

/** /stroke360/hoc/ · /stroke360/en/learn/#x · /stroke360/en/contact/?topic=y */
export function pageHref(lang: Lang, key: PageKey, suffix = ""): string {
  const slug = routes[key][lang];
  return root(lang) + (slug ? slug + "/" : "") + suffix;
}
export const lessonHref = (lang: Lang, id: string) => `${root(lang)}${routes.lesson[lang]}/${id.toLowerCase()}/`;
/** Same page in another language (used by the language switch and hreflang). */
export const localized = (lang: Lang, key: RouteKey, id?: string) =>
  key === "lesson" ? lessonHref(lang, id!) : pageHref(lang, key);
export const asset = (path: string) => BASE + path.replace(/^\//, "");

/** Links the islands need, resolved once on the server. */
export const linkKit = (lang: Lang) => ({
  lessonBase: `${root(lang)}${routes.lesson[lang]}/`,
  contact: pageHref(lang, "lienHe"),
  community: pageHref(lang, "congDong"),
  services: pageHref(lang, "dichVu"),
  learn: pageHref(lang, "hoc")
});
export type LinkKit = ReturnType<typeof linkKit>;

export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));

export const vnd = (n: number, lang: Lang) =>
  lang === "vi" ? n.toLocaleString("vi-VN") + " đ" : n.toLocaleString("en-US") + " ₫";

export const stageLabel = (c: Content, stage: string) =>
  /^[ABC]$/.test(stage) ? `${c.ui.stagePrefix} ${stage}` : c.stages[stage as keyof Content["stages"]];
