import { ok } from 'assert';
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkTokenValid } from "./lib/checkTokenValidity";


const PUBLIC_PATH = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = (await cookies()).get('auth_token')?.value;
  const isPublicPage = PUBLIC_PATH.includes(pathname);


  if (!token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  const isValid = await checkTokenValid(token);
  if (!isValid) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
