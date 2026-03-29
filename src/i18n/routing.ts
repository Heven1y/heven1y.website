import { defineRouting } from "next-intl/routing";

import { LANGUAGES } from "@/shared/config/constants";
import { Languages } from "@/shared/models/enums";

export const routing = defineRouting({
  locales: LANGUAGES.map((lang) => lang.key),
  defaultLocale: Languages.English,
});
