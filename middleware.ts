import createMiddleware from 'next-intl/middleware';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de', 'nl'],
  
  // Used when no locale matches
  defaultLocale: 'nl',
  localeDetection: true,
});

export default function middleware(req: NextRequest) {
  // Run clerkMiddleware first
  const clerkResponse = clerkMiddleware();
  
  if (clerkResponse instanceof NextResponse) {
    // If clerkMiddleware returns a response, return it directly
    return clerkResponse;
  }
  
  // If clerkMiddleware passes, run intlMiddleware
  return intlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!static|.*\\..*|_next).*)', '/(api|trpc)(.*)', '/', '/(de|en|nl)/:path*']
};
