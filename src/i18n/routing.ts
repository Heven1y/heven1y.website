import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "jp"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
