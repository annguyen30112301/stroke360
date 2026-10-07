/* Learning progress, stored only in this browser. Keys unchanged from the old site. */
const KEY = "s360_done";
const EVT = "s360:progress";

const read = (): string[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch { return []; }
};
const write = (ids: string[]) => {
  try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch { /* private mode */ }
  window.dispatchEvent(new Event(EVT));
};

export const progress = {
  get: read,
  add(id: string) { const d = read(); if (!d.includes(id)) write([...d, id]); },
  reset() { write([]); },
  subscribe(fn: () => void) {
    window.addEventListener(EVT, fn);
    window.addEventListener("storage", fn);
    return () => { window.removeEventListener(EVT, fn); window.removeEventListener("storage", fn); };
  }
};

export const store = {
  get(key: string): string | null { try { return localStorage.getItem(key); } catch { return null; } },
  set(key: string, v: string) { try { localStorage.setItem(key, v); } catch { /* ignore */ } }
};
