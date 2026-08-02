import { useSyncExternalStore } from "react";

import { BREAKPOINT_MINI_LAPTOP_PX } from "@/shared/config/constants";

const DESKTOP_MEDIA_QUERY = `(min-width: ${BREAKPOINT_MINI_LAPTOP_PX + 1}px)`;

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

  mediaQuery.addEventListener("change", callback);

  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return window.matchMedia(DESKTOP_MEDIA_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export default function useIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
