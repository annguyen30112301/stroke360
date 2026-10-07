export type Lang = "vi" | "en";
export type StageKey = "K" | "A" | "B" | "C" | "T";

export interface QuizItem { q: string; a: string[]; c: number }

export interface Lesson {
  id: string;
  stage: StageKey;
  /** true = bài hoàn chỉnh; false = "Sắp ra mắt" */
  ready: boolean;
  mins: number;
  title: string;
  keywords: string;
  points?: string[];
  checklist?: string[];
  quiz?: QuizItem[];
}

export interface Service {
  code: string;
  stage: string;
  name: string;
  time: string;
  price: number;
  unit: string;
  priceText?: string;
  desc: string;
}

export interface ImpactStat { value: number; label: string; prefix?: string; suffix?: string; decimals?: number }

export interface Counseling { id: string; for: string; patient?: boolean; name: string; format: string; desc: string; price: string; free?: boolean }

export interface Story { who: string; role: string; stage: string; quote: string; body: string }

export interface DiaryEntry { t: string; title: string; note: string; tag: string; hl?: boolean; summary?: boolean }

export interface CommunityEvent { date: string; title: string; where: string; hot?: boolean }
