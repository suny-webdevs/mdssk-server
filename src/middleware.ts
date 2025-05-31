import { hasCookie } from "./utils/cookies"
import { NextRequest, NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export const middleware = async (request: NextRequest) => {
  const token = await hasCookie("next-auth.session-token")
  const pathname = request.nextUrl.pathname

  if (pathname.includes("api")) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/?redirect=${pathname}`, request.url) || "/"
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/blogs/:path*", "/portfolios/:path*", "/profile"],
}
