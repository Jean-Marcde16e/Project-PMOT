import { clerkMiddleware } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';

export default clerkMiddleware();
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['nl', 'en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'nl'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|de|en)/:path*']
};