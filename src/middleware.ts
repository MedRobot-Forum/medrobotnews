import NextAuth from "next-auth"
import { authConfig } from "./app/api/auth/auth.config"

export const middleware = NextAuth(authConfig).auth

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
} 