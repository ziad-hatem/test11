import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",

  // Custom function to determine the locale
  getLocale: (req) => {
    // Extract the pathname from the URL

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    // Extract the first segment of the path to determine the locale

    const pathSegments = pathname.split("/");

    const lang = pathSegments[1]; // Assuming the locale is the first segment

    // Validate and return the language if it's supported
    if (lang && ["en", "ar"].includes(lang)) {
      return lang;
    }

    // Fallback to default locale (English)

    return "en";
  },
});

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
