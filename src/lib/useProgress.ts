import { useSyncExternalStore } from "react";
import { progress } from "./progress";

let cache: string[] = [];
let cacheKey = "";
const snapshot = () => {
  const d = progress.get(), k = d.join(",");
  if (k !== cacheKey) { cacheKey = k; cache = d; }
  return cache;
};
const empty: string[] = [];

/** Completed lesson ids; empty during SSR/hydration, then real values. */
export const useProgress = () => useSyncExternalStore(progress.subscribe, snapshot, () => empty);
