import { clerkMiddleware } from "@clerk/nextjs/server";
import createMiddleware from 'next-intl/middleware';

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)", '/(nl|de|en)/:path*'],
};

export default clerkMiddleware();
export createMiddleware({
  
});
