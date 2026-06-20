import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_PATH_PATTERN =
  /^\/(\.env|\.git|wp-admin|wp-login|phpmyadmin|xmlrpc\.php|administrator)/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED_PATH_PATTERN.test(pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webmanifest)$).*)"]
};
