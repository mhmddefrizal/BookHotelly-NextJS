import { authMiddleware } from "@/auth.edge";
import { NextResponse } from "next/server";

const ProtectedRoutes = ["/reservasisaya", "/checkout", "/admin"];

export default authMiddleware((request) => {
  const session = request.auth;
  const isLoggedIn = !!session?.user;
  const role = session?.user?.role;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/masuk", request.url));
  }
  if (isLoggedIn && role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (isLoggedIn && pathname.startsWith("/masuk")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
