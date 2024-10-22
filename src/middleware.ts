import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { LANGUAGES } from "./6_shared/config/constants";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locales = LANGUAGES.map((lang) => lang.key);

  const shouldHandle =
    pathname === "/" ||
    new RegExp(`^/(${locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname,
    );
  if (!shouldHandle) return;

  return handleI18nRouting(request);
}
