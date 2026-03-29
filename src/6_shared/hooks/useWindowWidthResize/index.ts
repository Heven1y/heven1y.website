import { useSyncExternalStore } from "react";

function getWindowWidth() {
  return typeof window !== "undefined" ? window.innerWidth : 0;
}

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function useWindowWidthResize() {
  return useSyncExternalStore(subscribe, getWindowWidth, () => 0);
}

export default useWindowWidthResize;
