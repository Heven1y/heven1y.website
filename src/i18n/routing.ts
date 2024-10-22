import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { LANGUAGES } from "@/shared/config/constants";
import { Languages } from "@/shared/models/enums";

export const routing = defineRouting({
  locales: LANGUAGES.map((lang) => lang.key),
  defaultLocale: Languages.English,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
