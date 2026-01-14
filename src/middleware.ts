import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const PUBLIC_PATH = ["/login", "/register"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = (await cookies()).get('auth_token')?.value;
  const isAuthenticated = Boolean(token);
  const isPublicPage = PUBLIC_PATH.includes(pathname);

  if (isAuthenticated && isPublicPage) {
     return NextResponse.redirect(new URL('/', req.nextUrl))
  }


  if (!isAuthenticated && !isPublicPage) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
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
